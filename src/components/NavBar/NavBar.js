import "./NavBar.css";
import LogoGb from "../../img/LogoGb.png";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {

    return (

        <nav className="has-background-black" id="navbar" >
            <Link to="/">
                <img src={LogoGb} width={120} height={200} />
            </Link>

            <NavLink to={`/category/cascos`} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}><h4>CASCOS</h4></NavLink>
            <NavLink to={`/category/cubiertas`} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}> <h4>CUBIERTAS</h4></NavLink>
            <NavLink to={`/category/indumentaria`} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}><h4> INDUMENTARIA</h4></NavLink>
            <NavLink to={`/category/repuestosengeneral`} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}><h4> REPUESTOS EN GENERAL</h4></NavLink>

            <CartWidget/>

        </nav >
    )

}

export default NavBar;