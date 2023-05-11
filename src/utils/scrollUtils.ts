import { scroller } from "react-scroll";

export const scrollToDiv = (target: string) => {
  scroller.scrollTo(target, {
    duration: 100,
    delay: 0,
    smooth: "easeInOutQuart",
  });
};
