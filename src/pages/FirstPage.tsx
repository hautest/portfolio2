import styled from "styled-components";
import { Header } from "../Header";

import { flexColumnJustCenterAlignCenter, flexColumn } from "../styles/common";

export function FirstPage() {
  return (
    <StyledFirstPage>
      <Img alt="내사진" src="../me.jpeg" />
      <AnimateTextBox>
        <AnimateText>프론트엔드 지원자 이승훈입니다</AnimateText>
      </AnimateTextBox>
      <Header />
    </StyledFirstPage>
  );
}
const StyledFirstPage = styled.div`
  background-image: url(https://cdn.pixabay.com/photo/2016/11/21/15/01/stars-1845852_960_720.jpg);
  background-size: cover;
  height: 100vh;
  width: 100%;
  gap: 30px;
  ${flexColumnJustCenterAlignCenter}
`;
const AnimateTextBox = styled.div`
  ${flexColumn}
  gap: 20px;
  width: fit-content;
`;

const Img = styled.img`
  width: 50%;
  border-radius: 50px;
`;

const AnimateText = styled.div`
  font-size: 20px;
  width: 100%;
  height: fit-content;
  border-right: 3px solid;
  animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;
  overflow: hidden;
  height: 20px;
  @keyframes typing {
    from {
      width: 0;
    }
  }
  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
  @media screen and (max-width: 365px) {
    font-size: 10px;
    height: 10px;
  }
`;
