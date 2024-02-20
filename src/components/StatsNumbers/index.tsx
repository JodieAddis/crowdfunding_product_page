interface StatsNumbersProps {
  number: string;
}

const Component: React.FC<StatsNumbersProps> = ({ number }) => {
  return (
    <>
      <p>{number}</p>
    </>
  );
};

export default Component;
