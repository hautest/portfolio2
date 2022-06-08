import styled from "styled-components";
import { useState } from "react";

import { ProjectContent } from "./ProjectContent";
import { projectData } from "./projectData";
import { FooterButton } from "./FooterButton";

interface ImgProp {
  disabled: boolean;
}

export function Project() {
  const [projectNum, setProjectNum] = useState<number>(1);
  const data = projectData[projectNum - 1];
  const dataLength = projectData.length;

  const handleBack = () => {
    setProjectNum((prev) => prev - 1);
  };
  const handleFront = () => {
    setProjectNum((prev) => prev + 1);
  };
  return (
    <StyledProject id="Project">
      <Projectext>PROJECT</Projectext>
      <ContentFooterButtonBox>
        <ProjectContentBox>
          <FrontBackButton onClick={handleBack} disabled={projectNum === 1}>
            <Img
              disabled={projectNum === 1}
              alt="이전으로가는방향이미지"
              src="../../before.png"
            />
          </FrontBackButton>
          <ProjectContent
            title={data.title}
            itemId={data.id}
            desc={data.desc}
            github={data.gitHub}
            url={data.url}
            skill={data.skill}
          />
          <FrontBackButton
            disabled={dataLength - 1 === projectNum}
            onClick={handleFront}
          >
            <Img
              disabled={dataLength - 1 === projectNum}
              alt="다음으로가는방향이미지"
              src="../../next.png"
            />
          </FrontBackButton>
        </ProjectContentBox>
        <FooterButtonBox>
          <FooterButton projectNum={projectNum} setProjectNum={setProjectNum} />
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

const Img = styled.img<ImgProp>`
  display: ${({ disabled }) => (disabled ? "none" : "inline")};
  width: 100%;
`;
