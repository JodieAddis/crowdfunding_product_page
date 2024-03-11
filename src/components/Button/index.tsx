import Paragraph from "../../typographies/Paragraph";

interface ButtonProps {
  text: string;
  css: string;
}

const Component: React.FC<ButtonProps> = ({ text, css }) => {
  return (
    <button className={`flex flex-row rounded-full font-bold ${css}`}>
      <Paragraph css="py-4 block mx-auto" content={text} />
    </button>
  );
};

export default Component;
