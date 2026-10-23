import Image from "next/image";
import { Play } from "lucide-react";
import type { MediaItem } from "@/content/media";

/** Thumbnail cards linking out to YouTube. No iframe or script loads until clicked. */
export function MediaSection({ items }: { items: MediaItem[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {items.map((item) => (
        <a
          key={item.videoId}
          href={`https://www.youtube.com/watch?v=${item.videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <div className="relative aspect-video overflow-hidden rounded-md border border-rule bg-raised">
            <Image
              src={`https://i.ytimg.com/vi/${item.videoId}/hqdefault.jpg`}
              alt={item.title}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-ink/10 transition-colors group-hover:bg-ink/20">
              <span className="flex size-12 items-center justify-center rounded-full bg-paper/90 text-ink shadow">
                <Play className="ml-0.5 size-5 fill-current" aria-hidden />
              </span>
            </span>
          </div>
          <p className="mt-3 font-medium leading-snug group-hover:text-accent">{item.title}</p>
          <p className="mt-1 text-sm text-muted">
            {item.source} &middot; {item.context}
          </p>
        </a>
      ))}
    </div>
  );
}
