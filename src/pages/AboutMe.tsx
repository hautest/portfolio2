import { ReactNode } from "react";
import {
  flexColumn,
  flexAlignCenter,
  flexColumnAlignCenter,
} from "../styles/common";
import styled from "styled-components";

interface AboutMeProps {
  id: string;
}

interface StyledAboutMeProps {
  children: ReactNode;
  id: string;
}

export function AboutMe({ id }: AboutMeProps) {
  return (
    <StyledAboutMe id={id}>
      <BusinessCard>
        <BusinessCardContent>π§βπ» μ΄μΉν</BusinessCardContent>
        <BusinessCardContent>π« μΈνκ³΅μμ λ¬Έλν(μ¬ν)</BusinessCardContent>
        <BusinessCardContent>
          <Img
            alt="κΉνλΈλ‘κ³ "
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          />
          <Link href="https://github.com/hautest" target="_blank">
            &nbsp;github.com/hautest
          </Link>
        </BusinessCardContent>
        <BusinessCardContent>π 010-6279-6570</BusinessCardContent>
      </BusinessCard>
      <IntroduceBox>
        <Introduce>
          π» μ£ΌκΈ°μ μΌλ‘ μμ§λ§ μλ‘μ΄ νλ‘μ νΈλ€μ νλμ© λ§λ€λ©° λ°°μ΄ μλ‘μ΄
          κΈ°μ λ€μ μ¬μ©ν΄ λ³΄λ©° κ²½νμ μκ³  μμ΅λλ€.
        </Introduce>
        <Introduce>
          π» μλ‘­κ³  λ νΈλ¦¬ν κΈ°μ μ λ§μ κ΄μ¬μ΄ μμ΄ μλ‘μ΄ κΈ°μ λ€μ λΉ λ₯΄κ²
          μ΅νμ λ°λ‘ μ¬μ©νμ¬ κΈ°μ‘΄μ νλ‘μ νΈμμ μ¬μ©νλ κΈ°μ λ€μ κ΅μ²΄νλ
          κ²μ μ’μν©λλ€.
        </Introduce>
        <Introduce>
          π» μ¬μ©μκ° λ νΈλ¦¬νκ² μ΄μ©ν  μ μλ μΉμ¬μ΄νΈλ₯Ό λ§λλ νλ‘ νΈμλ
          κ°λ°μκ° λκΈ° μν΄μ λΈλ ₯ μ€μλλ€.
        </Introduce>
      </IntroduceBox>
    </StyledAboutMe>
  );
}

const StyledAboutMe = styled.div<StyledAboutMeProps>`
  height: 93vh;
  background-color: ${({ theme }) => theme.colors.night4};
  ${flexAlignCenter}
  justify-content: space-around;
  @media screen and (max-width: 740px) {
    ${flexColumnAlignCenter}
    justify-content: space-around;
    gap: 20px;
  }
`;

const BusinessCard = styled.div`
  background-color: ${({ theme }) => theme.colors.night2};
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
  background-color: ${({ theme }) => theme.colors.night2};
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
