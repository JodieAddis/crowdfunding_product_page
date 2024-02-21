interface textContent {
  title: string;
  first_text: string;
  second_text: string;
}

const Component: React.FC<textContent> = ({
  title,
  first_text,
  second_text,
}) => {
  return (
    <>
      <h3 className="text-lg font-bold">{title}</h3>
      <div className="text-silver text-sm">
        <p>{first_text}</p>
        <p>{second_text}</p>
      </div>
    </>
  );
};

export default Component;
