interface textContent {
  title: string;
  text: string;
}

const Component: React.FC<textContent> = ({ title, text }) => {
  return (
    <>
      <h3 className="text-3xl font-bold mb-2">{title}</h3>
      <p className="text-silver text-sm mb-6">{text}</p>
    </>
  );
};

export default Component;
