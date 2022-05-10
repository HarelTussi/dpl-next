import { useEffect, useState } from "react";
import useWindow from "./useWindow";

const useDimensions = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const { window } = useWindow();

  useEffect(() => {
    if (window) {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
  }, [window]);

  return { width, height };
};

export default useDimensions;
