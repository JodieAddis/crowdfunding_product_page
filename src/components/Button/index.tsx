import IconBookMark from "../../icons/IconBookMark";

interface ButtonProps {
  isIcon?: boolean;
  text: string;
  css: string;
}

const Component: React.FC<ButtonProps> = ({ isIcon, text, css }) => {
  return (
    <div>
      <button className={`flex flex-row rounded-full font-bold ${css}`}>
        {isIcon && <IconBookMark />}
        <p className={`self-center py-4`}>{text}</p>
      </button>
    </div>
  );
};

export default Component;
