type IconMenuProps = {
  isOpen: boolean;
  onClick?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
};

const Icon = ({ isOpen, onClick }: IconMenuProps) => {
  return (
    <>
      {isOpen ? (
        <svg
          width="14"
          height="15"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-20 cursor-pointer"
          onClick={onClick}
        >
          <g fill="#FFF" fillRule="evenodd">
            <path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z" />
            <path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z" />
          </g>
        </svg>
      ) : (
        <svg
          width="16"
          height="15"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          className="mb-20 cursor-pointer"
        >
          <g fill="#FFF" fillRule="evenodd">
            <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
          </g>
        </svg>
      )}
    </>
  );
};

export default Icon;
