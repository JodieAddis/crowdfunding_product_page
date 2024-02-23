type IconMenuProps = {
  isOpen: boolean;
};

const Icon = ({ isOpen }: IconMenuProps) => {
  return (
    <>
      {isOpen ? (
        <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
          <g fill="#FFF" fill-rule="evenodd">
            <path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z" />
            <path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z" />
          </g>
        </svg>
      ) : (
        <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
          <g fill="#FFF" fill-rule="evenodd">
            <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
          </g>
        </svg>
      )}
    </>
  );
};

export default Icon;
