import { Link } from 'react-router-dom';

export const BackButton = ({ to, children }) => {
  return (
    <button>
      <Link to={to}>{children}</Link>
    </button>
  );
};
