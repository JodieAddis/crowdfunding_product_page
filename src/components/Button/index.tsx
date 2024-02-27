import IconBookMark from "../../icons/IconBookMark";
import useScreenSize from "../../hook/useScreenSize";

interface ButtonProps {
  isIcon?: boolean;
  text: string;
  css: string;
}

const Component: React.FC<ButtonProps> = ({ isIcon, text, css }) => {
  const screenSize = useScreenSize();
  return (
    <div>
      <button className={`flex flex-row rounded-full font-bold ${css}`}>
        {screenSize ? (
          <>{isIcon && <IconBookMark />}</>
        ) : (
          <>
            {isIcon && <IconBookMark />}
            <p className="self-center py-4">{text}</p>
          </>
        )}
      </button>
    </div>
  );
};

export default Component;
