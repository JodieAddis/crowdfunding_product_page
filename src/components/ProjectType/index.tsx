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
      <h4>{title}</h4>
      <p>{subtitle}</p>
      <p>{text}</p>
      <div>
        <p>{numberPrice}</p>
        <p>{textPrice}</p>
      </div>
      <Button isIcon={false} text={textButton} css="" />
    </>
  );
};

export default Component;
