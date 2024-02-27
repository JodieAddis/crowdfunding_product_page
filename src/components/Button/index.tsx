import IconBookMark from "../../icons/IconBookMark";

interface ButtonProps {
  isIcon?: boolean;
  text: string;
  css: string;
  cssText?: string;
}

const Component: React.FC<ButtonProps> = ({ isIcon, text, css, cssText }) => {
  return (
    <div>
      <button className={`flex flex-row rounded-full font-bold ${css}`}>
        {isIcon && <IconBookMark />}
        <p className={`self-center py-4 ${cssText}`}>{text}</p>
      </button>
    </div>
  );
};

export default Component;
