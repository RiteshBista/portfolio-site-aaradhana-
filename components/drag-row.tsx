"use client";

import { useRef, type ReactNode } from "react";

/**
 * A horizontally scrollable row that can also be dragged with a mouse.
 * Touch and trackpad scrolling work natively; pointer drag is added on top
 * for desktop mouse users, matching the "drag to explore" rows this was
 * modelled on.
 */
export function DragRow({ children, className = "" }: { children: ReactNode; className?: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const state = useRef({ dragging: false, moved: false, startX: 0, startScroll: 0 });

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const track = trackRef.current;
    if (!track) return;
    state.current = { dragging: true, moved: false, startX: e.clientX, startScroll: track.scrollLeft };
    track.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track || !state.current.dragging) return;
    const dx = e.clientX - state.current.startX;
    if (Math.abs(dx) > 3) state.current.moved = true;
    track.scrollLeft = state.current.startScroll - dx;
  };

  const endDrag = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (track && e.pointerId !== undefined) {
      try {
        track.releasePointerCapture(e.pointerId);
      } catch {
        // pointer was never captured (e.g. touch) — nothing to release
      }
    }
    state.current.dragging = false;
  };

  // Swallow the click that follows a drag so dragging a row never triggers
  // a link underneath it.
  const onClickCapture = (e: React.MouseEvent) => {
    if (state.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      state.current.moved = false;
    }
  };

  return (
    <div
      ref={trackRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
      onClickCapture={onClickCapture}
      className={`flex snap-x snap-proximity gap-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] cursor-grab select-none active:cursor-grabbing [&::-webkit-scrollbar]:hidden ${className}`}
    >
      {children}
    </div>
  );
}
