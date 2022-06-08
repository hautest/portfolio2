import styled, { css } from "styled-components";

export function Introduce() {
  return (
    <StyledIntroduce>
      <IntroduceContent>
        💻 2022년초부터 웹프론트엔드 개발에 재미를 느껴 하나씩 하나씩 배우며
        주기적으로 작지만 새로운 프로젝트들을 하나씩 만들며 배운 새로운 기술들을
        사용해 보며 경험을 쌓고 있습니다.
      </IntroduceContent>
      <IntroduceContent>
        💻 새롭고 더 편리한 기술에 많은 관심이 있어 새로운 기술들을 빠르게
        익혀서 바로 사용하여 기존에 프로젝트에서 사용했던 기술들을 교체하는 것을
        좋아합니다.
      </IntroduceContent>
      <IntroduceContent>
        💻 사용자가 더 편리하게 이용할 수 있는 웹사이트를 만드는 프론트엔드
        개발자가 되기 위해서 노력 중입니다.
      </IntroduceContent>
    </StyledIntroduce>
  );
}

const IntroduceContent = styled.article`
  word-break: break-all;
  color: ${({ theme }) => theme.colors.black};
`;

const StyledIntroduce = styled.div`
  ${({ theme: { spacing, colors } }) => css`
    padding: ${spacing.md};
    background-color: ${colors.white};
  `}
  width: 40%;
  height: 50%;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media screen and (max-width: 740px) {
    width: 80%;
  }
`;
