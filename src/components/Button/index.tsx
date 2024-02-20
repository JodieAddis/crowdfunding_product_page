import IconMark from "../IconMark";

interface ButtonProps {
  isIcon?: boolean;
  text: string;
  css: string;
}

const Component: React.FC<ButtonProps> = ({ isIcon, text, css }) => {
  return (
    <div>
      <button className={`flex flex-row font-bold rounded-full ${css}`}>
        {isIcon && <IconMark />}
        <p className="self-center py-4">{text}</p>
      </button>
    </div>
  );
};

export default Component;
