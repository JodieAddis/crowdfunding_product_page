import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [isCurrentSize, setIsCurrentSize] = useState<boolean>(
    window.innerWidth < 1024 ? true : false,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsCurrentSize(window.innerWidth < 1024 ? true : false);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return isCurrentSize;
};

export default useScreenSize;
