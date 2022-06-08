import { Dispatch, MouseEvent, useState, useEffect } from "react";
import styled from "styled-components";

import { ArrowLeftButton, ArrowRightButton } from "./ArrowButton";
import { StyledFooterButton } from "../../../styles/common";
import { projectData } from "../projectData";

interface FooterButtonProps {
  projectNum: number;
  setProjectNum: Dispatch<React.SetStateAction<number>>;
}

export function FooterButton({ projectNum, setProjectNum }: FooterButtonProps) {
  const maxPage = projectData.length - 1;
  const [buttonPage, setButtonPage] = useState<number[]>([]);
  const handlePageChange = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    setProjectNum(Number(target.innerText));
  };
  useEffect(() => {
    if (projectNum === 1) {
      setButtonPage([
        projectNum,
        projectNum + 1,
        projectNum + 2,
        projectNum + 3,
        projectNum + 4,
      ]);
    } else if (projectNum === 2) {
      setButtonPage([
        projectNum - 1,
        projectNum,
        projectNum + 1,
        projectNum + 2,
        projectNum + 3,
      ]);
    } else if (projectNum === maxPage) {
      setButtonPage([
        projectNum - 4,
        projectNum - 3,
        projectNum - 2,
        projectNum - 1,
        maxPage,
      ]);
    } else if (projectNum + 1 === maxPage) {
      setButtonPage([
        projectNum - 3,
        projectNum - 2,
        projectNum - 1,
        projectNum,
        projectNum + 1,
      ]);
    } else {
      setButtonPage([
        projectNum - 2,
        projectNum - 1,
        projectNum,
        projectNum + 1,
        projectNum + 2,
      ]);
    }
  }, [projectNum, maxPage]);
  return (
    <FooterButtonBox>
      <ArrowLeftButton projectNum={projectNum} setProjectNum={setProjectNum} />
      {buttonPage.map((pageValue) => (
        <div key={pageValue}>
          <StyledFooterButton onClick={handlePageChange} key={pageValue}>
            {pageValue}
          </StyledFooterButton>
        </div>
      ))}
      <ArrowRightButton
        projectNum={projectNum}
        setProjectNum={setProjectNum}
        maxPage={maxPage}
      />
    </FooterButtonBox>
  );
}

const FooterButtonBox = styled.div`
  display: flex;
`;
