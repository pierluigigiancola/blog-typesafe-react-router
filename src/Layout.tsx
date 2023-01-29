import { Outlet } from "react-router-dom";
import { Link } from "./router";

const Layout = () => {
  return (
    <div>
      <nav>
        <Link to="RGB">RGB Red</Link>
        <Link to="RGB">RGB Green</Link>
        <Link to="RGB">RGB Blue</Link>
        <Link to="HSL">HSL Red</Link>
        <Link to="HSL">HSL Green</Link>
        <Link to="HSL">HSL Blue</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
