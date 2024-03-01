import { useState } from "react";
import IconBookMark from "../../icons/IconBookMark";

interface ButtonProps {
  text: string;
}

const Component: React.FC<ButtonProps> = ({ text }) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  return (
    <div>
      <button
        className={`flex cursor-pointer flex-row rounded-full  bg-aquaHaze font-bold ${
          isDisabled ? "text-mineShaft" : "text-surfieGreen"
        }`}
        onClick={() => {
          setIsDisabled(true);
        }}
        disabled={isDisabled}
        id="bookmark-btn"
      >
        <IconBookMark clicked={isDisabled} />
        <p className={`self-center py-4 pr-10 `}>{text}</p>
      </button>
    </div>
  );
};

export default Component;
