const colors = {
  black: "#171717",
  white: "#FFFFFF",
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
