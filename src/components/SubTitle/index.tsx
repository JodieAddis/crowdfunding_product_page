interface SubTitleProps {
  subtitle: string;
}

const Component: React.FC<SubTitleProps> = (props) => {
  return (
    <>
      <h3>{props.subtitle}</h3>
    </>
  );
};

export default Component;
