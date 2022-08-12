export enum ButtonSize {
  Small = "small",
  Medium = "medium",
  Large = "large",
}

export enum ButtonColor {
  turquoise = "turquoise",
  emerald = "emerald",
  river = "river",
  amethyst = "amethyst",
  asphalt = "asphalt",
  midnight = "midnight",
  sun = "sun",
  carrot = "carrot",
  pumpkin = "pumpkin",
  paprika = "paprika",
  ice = "ice",
  white = "white",
  silver = "silver",
}
export type Sizes = "small" | "medium" | "large" | ({} & string);
export type Colors =
  | "turquoise"
  | "emerald"
  | "river"
  | "amethyst"
  | "asphalt"
  | "midnight"
  | "sun"
  | "carrot"
  | "pumpkin"
  | "paprika"
  | "ice"
  | "silver"
  | "white"
  | ({} & string);
