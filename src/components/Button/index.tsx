import { FaBookmark } from "react-icons/fa";

interface ButtonProps {
  isIcon?: boolean;
  text: string;
}

const Component: React.FC<ButtonProps> = ({ isIcon, text }) => {
  return (
    <>
      <button>
        {isIcon && <FaBookmark />} {text}
      </button>
    </>
  );
};

export default Component;
