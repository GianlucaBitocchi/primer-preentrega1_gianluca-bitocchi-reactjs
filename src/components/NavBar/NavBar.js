import "./NavBar.css";
import "animate.css";
import LogoGb from "../../img/LogoGb.png";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {

    return (

        <nav className="navBar animate__animated animate__fadeInRightBig">
            <Link to="/" >
                <img src={LogoGb} alt="logo" width={110} height={190} />
            </Link>

            <NavLink to={`/category/cascos`} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}><h4>CASCOS</h4></NavLink>
            <NavLink to={`/category/cubiertas`} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}> <h4>CUBIERTAS</h4></NavLink>
            <NavLink to={`/category/indumentaria`} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}><h4> INDUMENTARIA</h4></NavLink>
            <NavLink to={`/category/repuestosengeneral`} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}><h4> REPUESTOS EN GENERAL</h4></NavLink>
            <div className="carrito">
                <CartWidget />
            </div>
        </nav>

    )

}

export default NavBar;