import { useState } from "react";

import IconMenu from "../../icons/IconMenu";

const Component = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className=" mr-10 mt-8">
      {isOpen ? (
        <>
          <button
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <IconMenu isOpen={true} />
          </button>
          <div className="absolute  left-1/2 z-20 mt-10 w-80 translate-x-[-50%] rounded-lg bg-white text-black">
            <ul className="flex flex-col justify-start text-xl capitalize">
              <li className="my-6 ml-10 w-80 cursor-pointer border-b-2 border-solid border-wildSand pb-6">
                about
              </li>
              <li className="my-6 ml-10 w-80 cursor-pointer border-b-2 border-solid border-wildSand pb-6">
                discover
              </li>
              <li className="ml-10 mt-6 w-80 cursor-pointer pb-6">
                get started
              </li>
            </ul>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-end">
            <button
              onClick={() => {
                setIsOpen(true);
              }}
              className="mb-20"
            >
              <IconMenu isOpen={false} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Component;
