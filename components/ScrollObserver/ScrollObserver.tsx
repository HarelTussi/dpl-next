import { useEffect } from "react";
import { useScrollStore } from "stores/scroll";

const ScrollObserver = () => {
  const setScrollY = useScrollStore((state) => state.setScrollY);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [setScrollY]);
  return null;
};

export default ScrollObserver;
