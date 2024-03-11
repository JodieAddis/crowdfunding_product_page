import { useEffect } from "react";

type useClickOutsideProps = {
  setState: (newValue: boolean) => void;
  ref: React.RefObject<HTMLDivElement>;
};

export const useClickOutside = ({ setState, ref }: useClickOutsideProps) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        setState &&
        ref.current &&
        !ref.current.contains(e.target as Node)
      ) {
        setState(false);
      }
    };

    document.addEventListener("click", handleClick);

    return (): void => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref, setState]);
};
