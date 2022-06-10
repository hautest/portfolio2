import styled from "styled-components";
import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";

import { ProjectContent } from "./ProjectContent";
import { projectData } from "./projectData";
import { projectNumAtom } from "../../store/projectNumAtom";
import { useToggle } from "../../useToggle";
import { FooterButton } from "./FooterButton";

export function Project() {
  const [projectNum, setProjectNum] = useRecoilState<number>(projectNumAtom);
  const maxPage = projectData.length;
  const { toggle, setToggle } = useToggle();
  const ref = useRef(null);
  useEffect(() => {
    if (!!ref.current) {
      const element = ref.current;
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entrie) => {
          if (entrie.isIntersecting) {
            console.log("toggleOn");
            setToggle(true);
          }
        });
      });
      observer.observe(element);
    }
  }, [setToggle]);

  useEffect(() => {
    const setTime = setTimeout(() => {
      if (toggle) {
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
            <Img alt="이전으로가는방향이미지" src="../../before.png" />
          </FrontBackButton>
          <ProjectContent />
          <FrontBackButton onClick={handleFront}>
            <Img alt="다음으로가는방향이미지" src="../../next.png" />
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
  background-color: ${({ theme }) => theme.colors.gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10%;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;

const Projectext = styled.div`
  color: ${({ theme }) => theme.colors.night1};
  font-size: 50px;
  width: 100%;
  @media screen and (max-width: 740px) {
    display: flex;
    justify-content: center;
  }
`;

const ProjectContentBox = styled.div`
  display: flex;
  justify-content: center;
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
