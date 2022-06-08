import { ReactNode } from "react";
import styled from "styled-components";

import { BusinessCard } from "./BusinessCard";
import { Introduce } from "./Introduce";
import {
  flexColumn,
  flexAlignCenter,
  flexColumnAlignCenter,
} from "../../styles/common";

interface StyledAboutMeProps {
  children: ReactNode;
  id: string;
}

export function AboutMe() {
  return (
    <StyledAboutMe id="AboutMe">
      <BusinessCardAondAboutMeTextBox>
        <AboutMeText>ABOUT ME</AboutMeText>
        <BusinessCard />
      </BusinessCardAondAboutMeTextBox>
      <Introduce />
    </StyledAboutMe>
  );
}

const StyledAboutMe = styled.div<StyledAboutMeProps>`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray};
  ${flexAlignCenter}
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  @media screen and (max-width: 740px) {
    ${flexColumnAlignCenter}
    justify-content: space-around;
    gap: 20px;
    padding: 0;
  }
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
