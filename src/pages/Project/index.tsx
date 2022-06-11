import styled, { css } from "styled-components";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";

import { ProjectContent } from "./ProjectContent";
import { flexColumnJustCenter, flexJustCenter } from "../../styles/common";
import { projectData } from "./projectData";
import { projectNumAtom } from "../../store/projectNumAtom";
import { useToggle } from "../../useToggle";
import { FooterButton } from "./FooterButton";

export function Project() {
  const [projectNum, setProjectNum] = useRecoilState<number>(projectNumAtom);
  const [autoProject, setAutoProject] = useState(true);
  const maxPage = projectData.length;
  const { toggle, setToggle } = useToggle();
  const ref = useRef(null);

  useEffect(() => {
    if (!!ref.current) {
      const element = ref.current;
      if (autoProject) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entrie) => {
            if (entrie.isIntersecting) {
              setAutoProject(false);
              setToggle(true);
            }
          });
        });
        observer.observe(element);
        return () => observer.unobserve(element);
      }
    }
  }, [setToggle, autoProject]);

  useEffect(() => {
    const setTime = setTimeout(() => {
      if (!!toggle) {
        if (projectNum === maxPage) {
          setProjectNum(0);
        }
        setProjectNum((prev) => prev + 1);
      }
    }, 1700);
    return () => clearTimeout(setTime);
  }, [projectNum, maxPage, setProjectNum, toggle]);

  const handleBack = () => {
    setToggle(false);
    if (projectNum === 1) {
      setProjectNum(maxPage + 1);
    }
    setProjectNum((prev) => prev - 1);
  };
  const handleFront = () => {
    setToggle(false);
    if (projectNum === maxPage) {
      //여기서 0말고 1넣으면 안됨
      setProjectNum(0);
    }
    setProjectNum((prev) => prev + 1);
  };
  return (
    <StyledProject id="Project">
      <Projectext>PROJECT</Projectext>
      <ContentFooterButtonBox>
        <ProjectContentBox>
          <FrontBackButton onClick={handleBack}>
            <Img alt="이전으로가는방향이미지" src="../../img/before.png" />
          </FrontBackButton>
          <ProjectContent />
          <FrontBackButton onClick={handleFront}>
            <Img alt="다음으로가는방향이미지" src="../../img/next.png" />
          </FrontBackButton>
        </ProjectContentBox>
        <FooterButtonBox ref={ref}>
          <FooterButton />
        </FooterButtonBox>
      </ContentFooterButtonBox>
    </StyledProject>
  );
}

const StyledProject = styled.div`
  height: 93vh;
  ${({ theme: { colors, spacing } }) => css`
    background-color: ${colors.gray};
    padding: 0 ${spacing.lg};
  `}
  ${flexColumnJustCenter}
  gap: 10%;
`;

const Projectext = styled.div`
  color: ${({ theme }) => theme.colors.night1};
  font-size: 50px;
  width: 100%;
  @media screen and (max-width: 740px) {
    ${flexJustCenter};
  }
`;

const ProjectContentBox = styled.div`
  ${flexJustCenter};
`;

const FooterButtonBox = styled.div`
  margin: 0 auto;
`;

const ContentFooterButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4vh;
`;

const FrontBackButton = styled.button`
  width: 10%;
  background-color: ${({ theme }) => theme.colors.gray};
  border: 0;
`;

const Img = styled.img`
  width: 100%;
`;
