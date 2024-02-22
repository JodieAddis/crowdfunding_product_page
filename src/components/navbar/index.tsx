import IconHamburger from "../icons/IconHamburger";
import IconCloseMenu from "../icons/IconCloseMenu";
import React from "react";
import { useState } from "react";

const Component: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" mt-14 mr-10">
      {isOpen ? (
        <>
          <div className="flex justify-end">
            <button
              onClick={() => {
                setIsOpen(false);
              }}
              className="mb-20"
            >
              <IconCloseMenu />
            </button>
          </div>
          <div className="absolute  left-1/2 translate-x-[-50%] z-20 bg-white text-black w-80 rounded-lg">
            <ul className="flex flex-col text-xl capitalize justify-start">
              <li className="my-6 ml-10 cursor-pointer border-wildSand border-b-2 border-solid w-80 pb-6">
                about
              </li>
              <li className="my-6 ml-10 cursor-pointer border-wildSand border-b-2 border-solid w-80 pb-6">
                discover
              </li>
              <li className="mt-6 ml-10 cursor-pointer w-80 pb-6">
                get started
              </li>
            </ul>
          </div>
        </>
      ) : (
        <button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <IconHamburger />
        </button>
      )}
    </div>
  );
};

export default Component;

{
  /* 
DESKTOP: 
<ul className="flex flex-row text-sm capitalize font-bold">
<li className="mx-3 cursor-pointer">about</li>
<li className="mx-3 cursor-pointer">discover</li>
<li className="mx-3 cursor-pointer">get started</li>
</ul> */
}
