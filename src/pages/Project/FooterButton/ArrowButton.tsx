import { Dispatch } from "react";

import { StyledFooterButton } from "../../../styles/common";

interface ArrowButtonProps {
  projectNum: number;
  setProjectNum: Dispatch<React.SetStateAction<number>>;
  maxPage: number;
}

export function ArrowLeftButton({
  setProjectNum,
  projectNum,
}: Omit<ArrowButtonProps, "maxPage">) {
  return (
    <div className="buttonBox">
      <StyledFooterButton onClick={() => setProjectNum(1)}>
        &lt;&lt;
      </StyledFooterButton>
      <StyledFooterButton
        onClick={() => setProjectNum(projectNum > 5 ? projectNum - 5 : 1)}
      >
        &lt;
      </StyledFooterButton>
    </div>
  );
}

export function ArrowRightButton({
  projectNum,
  setProjectNum,
  maxPage,
}: ArrowButtonProps) {
  return (
    <div>
      <StyledFooterButton
        onClick={() =>
          setProjectNum(projectNum < maxPage - 4 ? projectNum + 5 : maxPage)
        }
      >
        &gt;
      </StyledFooterButton>
      <StyledFooterButton onClick={() => setProjectNum(maxPage)}>
        &gt;&gt;
      </StyledFooterButton>
    </div>
  );
}
