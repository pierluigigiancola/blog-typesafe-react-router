import { Outlet } from "react-router-dom";
import { Link } from "./router";

const Layout = () => {
  return (
    <div>
      <nav>
        <Link
          to="RGB"
          params={{
            red: "255",
            green: "0",
            blue: "0",
          }}
        >
          RGB Red
        </Link>
        <Link
          to="RGB"
          params={{
            red: "0",
            green: "255",
            blue: "0",
          }}
        >
          RGB Green
        </Link>
        <Link
          to="RGB"
          params={{
            red: "0",
            green: "0",
            blue: "255",
          }}
        >
          RGB Blue
        </Link>
        <Link
          to="HSL"
          params={{
            hue: "0",
            saturation: "100",
            lightness: "50",
          }}
        >
          HSL Red
        </Link>
        <Link
          to="HSL"
          params={{
            hue: "120",
            saturation: "100",
            lightness: "50",
          }}
        >
          HSL Green
        </Link>
        <Link
          to="HSL"
          params={{
            hue: "240",
            saturation: "100",
            lightness: "50",
          }}
        >
          HSL Blue
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
