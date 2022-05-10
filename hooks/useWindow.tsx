import { useEffect, useState } from "react";

const useWindow = () => {
  const [windowObj, setWindowObj] = useState<
    (Window & typeof globalThis) | null
  >(null);
  useEffect(() => {
    setWindowObj(window);
  }, []);
  return { window: windowObj };
};

export default useWindow;
