import styled from "styled-components";

export function Project() {
  return <StlyedProjsect id="Project"></StlyedProjsect>;
}

const StlyedProjsect = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray};
`;
