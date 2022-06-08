import styled from "styled-components";

interface ProjectContentProps {
  title: string;
  itemId: number;
  desc: string;
  github: string;
  url: string;
  skill: string;
}

export function ProjectContent({
  title,
  itemId,
  desc,
  github,
  url,
  skill,
}: ProjectContentProps) {
  return (
    <StyledProjectContentProps>
      <Ui>
        <ProJectText>{title}</ProJectText>
        <ProJectText>{desc}</ProJectText>
        <ProJectText>{github}</ProJectText>
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
