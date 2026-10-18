export const pad2 = (value: number): string => String(value).padStart(2, "0");

export const pickAt = <T>(items: readonly T[], index: number): T =>
  items[index % items.length];
