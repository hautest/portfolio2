const colors = {
  night1: "#0b1f3f",
  night2: "#95BADF",
  gray: "#E7EAED",
  brown: "#E8BF6B",
  white: "#FFFFFF",
  black: "#171717",
};

const spacing = {
  lg: "32px",
  md: "20px",
  sm: "8px",
};

export const theme = {
  colors,
  spacing,
};

export type ThemeColorType = keyof typeof colors;
export type ThemeSpacingType = keyof typeof spacing;
