import { useRecoilState } from "recoil";

import { toggleAtom } from "./store/toggleAtom";

export const useToggle = () => {
  const [toggle, setToggle] = useRecoilState(toggleAtom);
  const toggleOn = () => {
    setToggle((prev) => !prev);
  };
  return { toggle, toggleOn, setToggle };
};
