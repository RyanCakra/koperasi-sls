import { Link } from 'react-router-dom';

function NavLink({ href, text }) {
  return (
    <Link to={href} className="">
      {text}
    </Link>
  );
}

export default NavLink;
