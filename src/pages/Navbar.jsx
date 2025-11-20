import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About me</Link></li>
          <li><Link to="/projects">Projecten</Link></li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
