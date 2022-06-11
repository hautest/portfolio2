import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import styled, { css } from "styled-components";

import { flexColumn, flexAlignCenter } from "../../styles/common";

export function BusinessCard() {
  const phoneNum = "01062796570";
  const [copyState, setCopyState] = useState("Copy");
  const handleOnCopy = () => {
    setCopyState("Copied");
  };

  return (
    <StyledBusinessCard>
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
    </StyledBusinessCard>
  );
}

const StyledBusinessCard = styled.div`
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
