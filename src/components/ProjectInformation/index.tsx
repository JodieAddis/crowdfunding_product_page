interface textContent {
  title: string;
  text: string;
}

const Component: React.FC<textContent> = ({ title, text }) => {
  return (
    <>
      <h3>{title}</h3>
      <p>{text}</p>
    </>
  );
};

export default Component;
