import styled from "styled-components";

export function Header() {
  return (
    <StyledHeader>
      <div>ABOUT ME</div>
      <div>PROJECT</div>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  font-size: 25px;
  margin-top: ${({ theme }) => theme.spacing.lg};
  display: flex;
  justify-content: center;
  gap: 20%;
  @media screen and (max-width: 360px) {
    height: 10vh;
    flex-direction: column;
    align-items: center;
    gap: 20%;
  }
`;
