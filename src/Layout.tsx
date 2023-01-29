import { Link, Outlet } from "react-router-dom";


const Layout = () => {
    return (
        <div>
            <nav>
                <Link to='/rgb/255/0/0'>RGB Red</Link>
                <Link to='/rgb/0/255/0'>RGB Green</Link>
                <Link to='/rgb/0/0/255'>RGB Blue</Link>
                <Link to='/hsl/0/100/50'>HSL Red</Link>
                <Link to='/hsl/120/100/50'>HSL Green</Link>
                <Link to='/hsl/240/100/50'>HSL Blue</Link>
            </nav>
            <Outlet />
        </div>
    );
};

export default Layout;