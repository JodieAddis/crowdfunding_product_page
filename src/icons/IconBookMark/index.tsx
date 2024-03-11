type BookmarkProps = {
  isClicked: boolean;
  handleClick: React.MouseEventHandler<SVGSVGElement>;
};

const Icon = ({ isClicked, handleClick }: BookmarkProps) => {
  return (
    <div className="mr-4">
      <svg
        width="56"
        height="56"
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-pointer"
        onClick={handleClick}
      >
        <g fill="none" fillRule="evenodd">
          <circle
            fill={isClicked ? "#157a74" : "#2F2F2F"}
            cx="28"
            cy="28"
            r="28"
          />
          <path
            fill={isClicked ? "#ffffff" : "#B1B1B1"}
            d="M23 19v18l5-5.058L33 37V19z"
          />
        </g>
      </svg>
    </div>
  );
};

export default Icon;
