import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { projectData } from "./projectData";
import { projectNumAtom } from "../../store/projectNumAtom";

export function ProjectContent() {
  const projectNum = useRecoilValue(projectNumAtom);
  const { title, desc, gitHub, url, skill } = projectData[projectNum - 1];
  return (
    <StyledProjectContentProps>
      <Ui>
        <ProJectText>{title}</ProJectText>
        <ProJectText>{desc}</ProJectText>
        <ProJectText>{gitHub}</ProJectText>
        <ProJectText>{url}</ProJectText>
        <ProJectText>{skill}</ProJectText>
      </Ui>
    </StyledProjectContentProps>
  );
}

const StyledProjectContentProps = styled.div`
  width: 80%;
  height: 50vh;
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
`;
const ProJectText = styled.article`
  color: ${({ theme }) => theme.colors.black};
  word-break: break-all;
`;

const Ui = styled.ul`
  width: 100%;
`;
