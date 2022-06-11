import styled, { css } from "styled-components";

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const flexColumnJustCenter = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const flexColumnAlignCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const flexColumnJustCenterAlignCenter = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const flexAlignCenter = css`
  display: flex;
  align-items: center;
`;

export const StyledFooterButton = styled.button`
  color: ${({ theme }) => theme.colors.night1};
  background-color: ${({ theme }) => theme.colors.gray};
  border: 0;
`;

export const flexJustCenter = css`
  display: flex;
  justify-content: center;
`;
