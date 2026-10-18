const pic = (seed: string, width: number, height: number) =>
  `https://picsum.photos/seed/${seed}/${width}/${height}`;

export const placeholders = {
  hero: pic("bbt-hero", 1400, 1200),
  services: Array.from({ length: 8 }, (_, i) =>
    pic(`bbt-service-${i + 1}`, 800, 1100),
  ),
  stages: Array.from({ length: 4 }, (_, i) =>
    pic(`bbt-stage-${i + 1}`, 800, 1100),
  ),
  cases: Array.from({ length: 6 }, (_, i) =>
    pic(`bbt-case-${i + 1}`, 1200, 800),
  ),
  retainer: pic("bbt-retainer", 1400, 1600),
};
