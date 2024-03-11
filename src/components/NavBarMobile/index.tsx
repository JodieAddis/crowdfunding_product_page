import { useRef, useState } from "react";
import { useOverflow } from "../../hook/useOverflow";

import IconMenu from "../../icons/IconMenu";
import { useClickOutside } from "../../hook/useClickOutside";

const Component = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation()
    setIsOpen((prevState) => !prevState);
  };

  useOverflow({ state: isOpen });

  useClickOutside({ setState: setIsOpen, ref: dropdownRef });

  return (
    <div className="mr-10 mt-8">
      {isOpen ? (
        <>
          <div className="fixed left-0 top-0 z-10 h-screen w-screen bg-gradient-to-b from-black to-white opacity-70"></div>

          <IconMenu isOpen={true} onClick={handleClick} />

          <div
            className="absolute left-1/2 z-10 mt-10 w-80 translate-x-[-50%] rounded-lg bg-white text-black"
            ref={dropdownRef}
          >
            <ul className="flex flex-col justify-start text-xl capitalize">
              <li className="my-6 w-80 cursor-pointer border-b-2 border-solid border-wildSand pb-6 pl-10">
                about
              </li>
              <li className="w-80 cursor-pointer border-b-2 border-solid border-wildSand pb-6 pl-10">
                discover
              </li>
              <li className="mt-6 w-80 cursor-pointer pb-6 pl-10">
                get started
              </li>
            </ul>
          </div>
        </>
      ) : (
        <IconMenu isOpen={false} onClick={handleClick} />
      )}
    </div>
  );
};

export default Component;
