import { useState } from "react";

import IconBookMark from "../../icons/IconBookMark";
import Paragraph from "../../typographies/Paragraph";

const Component = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = () => {
    setIsClicked((prevState) => !prevState);
  };

  return (
    <div>
      <button
        className="flex cursor-pointer flex-row rounded-full  bg-aquaHaze font-bold"
        onClick={handleClick}
        id="bookmark-btn"
      >
        <IconBookMark isClicked={isClicked} handleClick={handleClick} />
        <Paragraph
          css={`self-center py-4 pr-10 ${isClicked ? "text-surfieGreen" : "text-silverChalice"}`}
          content={isClicked ? " Bookmarked" : "Bookmark"}
        />
      </button>
    </div>
  );
};

export default Component;
