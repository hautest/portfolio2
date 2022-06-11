import { MouseEvent, useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import { projectNumAtom } from "../../store/projectNumAtom";
import { useToggle } from "../../useToggle";
import { flexJustCenter } from "../../styles/common";
import { projectData } from "./projectData";

export function FooterButton() {
  const [projectNum, setProjectNum] = useRecoilState(projectNumAtom);
  const maxPage = projectData.length;
  const { toggle, toggleOn, setToggle } = useToggle();
  const [dataArr, setDataArr] = useState<
    //여기 왜 Pick<FooterButtonProps, "projectData"> 사용하면 안되는지 ?
    | {
        title: string;
        gitHub: string;
        desc: string;
        url: string;
        skill: string;
        id: number;
      }[]
    | []
  >([]);

  useEffect(() => {
    if (projectNum === 1) {
      setDataArr([
        projectData[projectNum - 1],
        projectData[projectNum],
        projectData[projectNum + 1],
      ]);
    } else if (projectNum !== 1 && projectNum !== maxPage) {
      setDataArr([
        projectData[projectNum - 2],
        projectData[projectNum - 1],
        projectData[projectNum],
      ]);
    } else if (projectNum === maxPage) {
      setDataArr([
        projectData[projectNum - 3],
        projectData[projectNum - 2],
        projectData[projectNum - 1],
      ]);
    }
  }, [setDataArr, projectNum, maxPage]);
  const handlePageChange = (e: MouseEvent<HTMLButtonElement>) => {
    setToggle(false);
    const target = e.target as HTMLButtonElement;
    setProjectNum(Number(target.id));
  };

  return (
    <FooterButtonBox>
      {dataArr &&
        dataArr.map((dataValue) => {
          return (
            <div key={dataValue.id}>
              <StyledFooterButton
                presentPage={dataValue.id === projectNum}
                id={String(dataValue.id)}
                onClick={handlePageChange}
                key={dataValue.id}
              >
                {dataValue.title}
              </StyledFooterButton>
            </div>
          );
        })}
      {toggle ? (
        <StopImg
          onClick={toggleOn}
          alt="일시정지아이콘"
          src="../../img/stop.png"
        />
      ) : (
        <RegoImg
          onClick={toggleOn}
          alt="다시실행아이콘"
          src="../../img/rego.png"
        />
      )}
    </FooterButtonBox>
  );
}

const FooterButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
`;

const StyledFooterButton = styled.button<{ presentPage: boolean }>`
  font-size: 15px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.night1};
  background-color: ${({ theme, presentPage }) =>
    presentPage ? theme.colors.night2 : theme.colors.gray};
  border: 0;
  word-break: break-all;
`;

const StopImg = styled.img`
  width: 20px;
`;
const RegoImg = styled.img`
  width: 20px;
`;
