import { useEffect } from "react";

type useOverflowProp = {
  state: boolean;
};

export const useOverflow = ({state}: useOverflowProp) => {
  useEffect(() => {
    const handleOverflow = (shouldOverflow: boolean) => {
      document.body.classList.toggle("no-scroll", shouldOverflow);
    };

    state ? handleOverflow(true) : handleOverflow(false);

    return (): void => {
      handleOverflow(false);
    };
  }, [state]);
};
