import React, { useCallback, useContext, useEffect, useState } from "react";

export const ScrollContext = React.createContext({
  scrollY: 0,
});

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (!context) throw new Error("Must be inside Scroll Context");
  return context;
};

export const ScrollContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [setScrollY]);
  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  );
};
