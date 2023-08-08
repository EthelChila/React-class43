import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <Link to="/">Products</Link>
      <Link to="/favorites">Favorites</Link>
    </div>
  );
};
export default Navbar;
