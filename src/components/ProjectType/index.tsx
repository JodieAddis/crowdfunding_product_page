import Button from "../Button";

interface textContent {
  title: string;
  subtitle: string;
  text: string;
  textPrice: string;
  numberPrice: string;
  textButton: string;
}

const Component: React.FC<textContent> = ({
  title,
  subtitle,
  text,
  textPrice,
  numberPrice,
  textButton,
}) => {
  return (
    <>
      <h4 className="text-sm font-bold">{title}</h4>
      <p className="text-keppel text-sm">{subtitle}</p>
      <p className="text-silver text-sm">{text}</p>
      <div className="flex flex-row">
        <p className="text-3xl font-bold">{numberPrice}</p>
        <p className="text-silver self-center">{textPrice}</p>
      </div>
      <Button
        isIcon={false}
        text={textButton}
        css="bg-keppel text-white px-10 text-sm"
      />
    </>
  );
};

export default Component;
