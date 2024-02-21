interface TextProps {
  text: string;
  CSS: string;
}

const Component: React.FC<TextProps> = ({ text, CSS }) => {
  return (
    <>
      <p className={`${CSS} text-silverChalice`}>{text}</p>
    </>
  );
};

export default Component;
