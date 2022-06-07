const colors = {
  night1: "#0b1f3f",
  night2: "#76A9FB",
  night3: "#2A7AFA",
  night4: "#2261C7",
  white: "#FFFFFF",
  black: "#171717",
};

const spacing = {
  lg: "32px",
  md: "16px",
  sm: "8px",
};

export const theme = {
  colors,
  spacing,
};

export type ThemeColorType = keyof typeof colors;
export type ThemeSpacingType = keyof typeof spacing;
