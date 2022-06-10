import { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { useRecoilState } from "recoil";

import { scrollAtom } from "./store/scrollAtom";
import { flexAlignCenter, flexColumnAlignCenter } from "./styles/common";

interface Opacity {
  opacity: number;
}

export function Frame() {
  const [scrollValue, setScrollValue] = useRecoilState(scrollAtom);
  const ref = useRef(document);
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);
  const handleScroll = () => {
    const conversion =
      0.0015 * window.scrollY || document.documentElement.scrollTop;
    setScrollValue(conversion);
  };
  ref.current.addEventListener("scroll", handleScroll);
  if (scrollValue > 0.6) {
    return (
      <>
        <StyledHeade opacity={scrollValue}>
          <Link to="AboutMe" smooth={true}>
            ABOUT ME
          </Link>
          <Link to="Project" smooth={true}>
            PROJECT
          </Link>
        </StyledHeade>
        <Link to="FirstPage" smooth={true}>
          <FooterUpButton opacity={scrollValue}>⬆</FooterUpButton>
        </Link>
      </>
    );
  } else {
    return (
      <>
        <StyledHeade opacity={scrollValue}>
          <div>ABOUT ME</div>
          <div>PROJECT</div>
        </StyledHeade>
        <FooterUpButton opacity={scrollValue}>⬆</FooterUpButton>
      </>
    );
  }
}

const StyledHeade = styled.header<Opacity>`
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

const FooterUpButton = styled.footer<Opacity>`
  opacity: ${({ opacity }) => opacity};
  position: fixed;
  bottom: 3%;
  right: 3%;
  font-size: 40px;
  color: ${({ theme }) => theme.colors.night1};
  border: solid ${({ theme }) => theme.colors.night1};
  border-radius: 50px;
  cursor: pointer;
`;
