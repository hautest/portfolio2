import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { flexAlignCenter, flexColumnAlignCenter } from "../styles/common";

export function Header() {
  const [opacity, setOpacity] = useState<number>(0);
  const ref = useRef(document);
  const handleScroll = () => {
    const conversion =
      0.001 * window.scrollY || document.documentElement.scrollTop;
    setOpacity(conversion);
    console.log(opacity);
  };
  useEffect(() => {
    ref.current.addEventListener("scroll", handleScroll);
  });
  if (opacity > 0.6) {
    return (
      <StyledHeade opacity={opacity}>
        <Link to="AboutMe" smooth={true}>
          ABOUT ME
        </Link>
        <div>PROJECT</div>
      </StyledHeade>
    );
  } else {
    return (
      <StyledHeade opacity={opacity}>
        <div>ABOUT ME</div>
        <div>PROJECT</div>
      </StyledHeade>
    );
  }
}

const StyledHeade = styled.div<{ opacity: number }>`
  opacity: ${({ opacity }) => opacity};
  background-color: ${({ theme }) => theme.colors.night1};
  font-size: 25px;
  position: fixed;
  width: 100%;
  height: 7vh;
  top: 0;
  ${flexAlignCenter}
  justify-content: center;
  gap: 20%;
  @media screen and (max-width: 365px) {
    height: 10vh;
    ${flexColumnAlignCenter}
    gap: 10px;
  }
`;
