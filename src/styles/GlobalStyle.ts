import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import { theme } from "./theme";
import "./font.css";

export const GlobalStyle = createGlobalStyle`
${reset}
  html * {
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
    font-family: "GimhaeGayaB";
}
`;
