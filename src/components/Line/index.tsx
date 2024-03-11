import useScreenSize from "../../hook/useScreenSize";

const Component = () => {
  const isMobile = useScreenSize();
  
  return (
    <>
      {isMobile ? (
        <div className="h-[1px] w-[80px] bg-black bg-opacity-10"></div>
      ) : (
        <div className="ml-24 h-[80px] w-[1px] bg-black bg-opacity-10"></div>
      )}
    </>
  );
};

export default Component;
