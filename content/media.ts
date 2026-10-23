/**
 * Press and media coverage. Thumbnails link out to YouTube rather than
 * embedding a player, so no third-party script loads until a visitor clicks
 * — keeping the "no tracking scripts" promise in the README.
 */
export type MediaItem = {
  videoId: string;
  title: string;
  source: string;
  context: string;
};

export const media: MediaItem[] = [
  {
    videoId: "zUIIkgvhJmw",
    title: "शहरी मोबिलिटीको विकल्प बन्न प्रयत्नरत 'रे रेन्टल' || Idea Studio || Ray Rental || Shilapatra",
    source: "Shilapatra",
    context: "Ray Rentals pitching at Idea Studio",
  },
  {
    videoId: "bGZTRIKzR-8",
    title: "पुल्चोक क्याम्पसमा जारी प्रविधि प्रदर्शनीमा के-के छन् ? | Kantipur Samachar",
    source: "Kantipur TV HD",
    context: "Technorion Nepal, technology exhibition coverage",
  },
  {
    videoId: "NqOe-oifnRs",
    title: "Technorion Nepal 2023 | विद्यार्थीले बनाएका रोबोटहरु बिच प्रतिस्पर्धा | Robotics Competition",
    source: "TechPana",
    context: "Technorion Nepal 2023, robotics competition",
  },
];
