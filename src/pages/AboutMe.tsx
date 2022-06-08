import { ReactNode, useState } from "react";
import styled, { css } from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";

import {
  flexColumn,
  flexAlignCenter,
  flexColumnAlignCenter,
} from "../styles/common";
interface StyledAboutMeProps {
  children: ReactNode;
  id: string;
}

export function AboutMe() {
  const phoneNum = "01062796570";
  const [copyState, setCopyState] = useState("Copy");
  const handleOnCopy = () => {
    setCopyState("Copied");
  };

  return (
    <StyledAboutMe id="AboutMe">
      <BusinessCardAondAboutMeTextBox>
        <AboutMeText>ABOUT ME</AboutMeText>
        <BusinessCard>
          <BusinessCardContent>🧑‍💻 이승훈</BusinessCardContent>
          <BusinessCardContent>🏫 인하공업전문대학(재학)</BusinessCardContent>
          <BusinessCardContent>
            <Img
              alt="깃허브로고"
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            />
            <Link href="https://github.com/hautest" target="_blank">
              &nbsp;github.com/hautest
            </Link>
          </BusinessCardContent>
          <BusinessCardContent>
            <NumberBox>
              📞 010-6279-6570
              <CopyToClipboard text={phoneNum} onCopy={handleOnCopy}>
                <CopyButton>{copyState}</CopyButton>
              </CopyToClipboard>
            </NumberBox>
          </BusinessCardContent>
        </BusinessCard>
      </BusinessCardAondAboutMeTextBox>
      <IntroduceBox>
        <Introduce>
          💻 2022년초부터 웹프론트엔드 개발에 재미를 느껴 하나씩 하나씩 배우며
          주기적으로 작지만 새로운 프로젝트들을 하나씩 만들며 배운 새로운
          기술들을 사용해 보며 경험을 쌓고 있습니다.
        </Introduce>
        <Introduce>
          💻 새롭고 더 편리한 기술에 많은 관심이 있어 새로운 기술들을 빠르게
          익혀서 바로 사용하여 기존에 프로젝트에서 사용했던 기술들을 교체하는
          것을 좋아합니다.
        </Introduce>
        <Introduce>
          💻 사용자가 더 편리하게 이용할 수 있는 웹사이트를 만드는 프론트엔드
          개발자가 되기 위해서 노력 중입니다.
        </Introduce>
      </IntroduceBox>
    </StyledAboutMe>
  );
}

const StyledAboutMe = styled.div<StyledAboutMeProps>`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray};
  ${flexAlignCenter}
  justify-content: space-around;
  @media screen and (max-width: 740px) {
    ${flexColumnAlignCenter}
    justify-content: space-around;
    gap: 20px;
  }
`;

const BusinessCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.md};
  width: 100%;
  height: 100%;
  border-radius: 50px;
  ${flexColumn}
  justify-content: space-around;
`;

const BusinessCardContent = styled.article`
  color: ${({ theme }) => theme.colors.night1};
  ${flexAlignCenter}
  font-size: 23px;
`;

const Introduce = styled.article`
  word-break: break-all;
  color: ${({ theme }) => theme.colors.black};
`;

const IntroduceBox = styled.div`
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

const Img = styled.img`
  width: 23px;
`;

const Link = styled.a`
  text-decoration: none;
  word-break: break-all;
  color: ${({ theme }) => theme.colors.night1};
`;

const NumberBox = styled.div`
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const CopyButton = styled.button`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.gray};
    color: ${colors.black};
  `}
  border: 0;
  cursor: pointer;
  border-radius: 50px;
`;

const BusinessCardAondAboutMeTextBox = styled.div`
  ${flexColumn}
  justify-content: space-around;
  gap: 20%;
  width: 40%;
  height: 50%;
  @media screen and (max-width: 740px) {
    width: 80%;
    align-items: center;
    padding-top: 8vh;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const AboutMeText = styled.div`
  color: ${({ theme }) => theme.colors.night1};
  font-size: 50px;
  width: 100%;
  @media screen and (max-width: 1000px) {
    font-size: 50px;
  }
`;
