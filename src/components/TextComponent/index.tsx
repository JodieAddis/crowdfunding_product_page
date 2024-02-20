interface TextProps {
  text: string;
}

const Component: React.FC<TextProps> = (props) => {
  return (
    <>
      <p>{props.text}</p>
    </>
  );
};

export default Component;
