import React from "react";
import { useState } from "react";
import IconHamburger from "../icons/IconHamburger";
import IconCloseMenu from "../icons/IconCloseMenu";

const Component: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-row mt-14 mr-24">
      {isOpen ? (
        <button
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <IconCloseMenu />
        </button>
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
