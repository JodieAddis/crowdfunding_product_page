interface ButtonProps {
  text: string;
  css: string;
}

const Component: React.FC<ButtonProps> = ({ text, css }) => {
  return (
    <div>
      <button className={`flex flex-row rounded-full font-bold ${css}`}>
        <p className={`self-center py-4`}>{text}</p>
      </button>
    </div>
  );
};

export default Component;
