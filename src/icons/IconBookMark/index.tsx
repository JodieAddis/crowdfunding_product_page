type BookmarkProps = {
  clicked: boolean;
};

const Icon = ({ clicked }: BookmarkProps) => {
  return (
    <div className="mr-4">
      <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd">
          <circle
            fill={clicked ? "#2F2F2F" : "#157a74"}
            cx="28"
            cy="28"
            r="28"
          />
          <path
            fill={clicked ? "#B1B1B1" : "#ffffff"}
            d="M23 19v18l5-5.058L33 37V19z"
          />
        </g>
      </svg>
    </div>
  );
};

export default Icon;
