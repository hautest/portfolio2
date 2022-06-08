import { ReactNode } from "react";
import styled from "styled-components";

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
  return (
    <StyledAboutMe id="AboutMe">
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
        <BusinessCardContent>📞 010-6279-6570</BusinessCardContent>
      </BusinessCard>
      <IntroduceBox>
        <Introduce>
          💻 주기적으로 작지만 새로운 프로젝트들을 하나씩 만들며 배운 새로운
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
  width: 40%;
  height: 40%;
  border-radius: 50px;
  ${flexColumn}
  justify-content: space-around;
  @media screen and (max-width: 740px) {
    width: 80%;
  }
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
  padding: ${({ theme }) => theme.spacing.md};
  width: 40%;
  height: 70%;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.white};
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
