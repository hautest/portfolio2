import { useRecoilValue } from "recoil";
import styled, { css } from "styled-components";

import { projectData } from "./projectData";
import { projectNumAtom } from "../../store/projectNumAtom";
import { useToggle } from "../../useToggle";
import {
  flexColumnJustCenter,
  flexColumn,
  flexJustCenter,
} from "../../styles/common";
import { useState } from "react";

export function ProjectContent() {
  const projectNum = useRecoilValue(projectNumAtom);
  const { toggle, setToggle } = useToggle();
  const { title, desc, gitHub, url, skill, img } = projectData[projectNum - 1];
  const [onBackDisplay, setOnBackDisplay] = useState(false);
  const handleMouseOver = () => {
    setOnBackDisplay(true);
    if (!!toggle) {
      setToggle(false);
    }
  };
  const handleMouseOut = () => {
    setOnBackDisplay(false);
  };
  return (
    <StyledProjectContentProps
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {!onBackDisplay && (
        <FrontDisplay>
          <ProjectImg alt="프로젝트이미지" src={img} />
          <Title>{title}</Title>
        </FrontDisplay>
      )}
      {!!onBackDisplay && (
        <BackDisplay>
          <LinkBox>
            <A target="_blank" href={url}>
              {title}로 이동하기
            </A>
            <A target="_blank" href={gitHub}>
              깃허브로 이동하기
            </A>
          </LinkBox>
          <ProJectText>{desc}</ProJectText>
          <ProJectText>skill : {skill}</ProJectText>
        </BackDisplay>
      )}
    </StyledProjectContentProps>
  );
}

const StyledProjectContentProps = styled.div`
  width: 50vh;
  height: 50vh;
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
`;
const ProJectText = styled.article`
  color: ${({ theme }) => theme.colors.black};
  word-break: break-all;
  line-height: 25px;
`;

const FrontDisplay = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
  ${flexColumnJustCenter};
`;

const ProjectImg = styled.img`
  width: 100%;
`;

const BackDisplay = styled.div`
  ${flexColumn};
  justify-content: space-around;
  gap: 10px;
  font-size: 80%;
  @media screen and (max-width: 450px) {
    font-size: 10px;
  }
`;

const Title = styled.div`
  ${({ theme: { colors } }) => css`
    color: ${colors.black};
    background-color: ${colors.gray};
  `};
  ${flexJustCenter};
  font-size: 3vh;
  word-break: break-all;
`;

const A = styled.a`
  color: ${({ theme }) => theme.colors.black};
`;

const LinkBox = styled.div`
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 450px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;
