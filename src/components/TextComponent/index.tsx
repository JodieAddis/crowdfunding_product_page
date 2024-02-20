interface TextProps {
  text: string;
  positionCSS: string;
}

const Component: React.FC<TextProps> = ({ text, positionCSS }) => {
  return (
    <>
      <p className={`text-${positionCSS} text-silverChalice font-medium`}>
        {text}
      </p>
    </>
  );
};

export default Component;
