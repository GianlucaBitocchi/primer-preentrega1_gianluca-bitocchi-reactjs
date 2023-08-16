import "./NavBar.css";
import LogoGb from "../../img/LogoGb.png";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {

    return (

        <nav className="navbar is-black has-shadow" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to="/">
                    <img src={LogoGb} alt="logo" width={110} height={190} />
                </Link>
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">

                <a className="navbar-item title is-6">
                    CONOCENOS
                </a>


                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link title is-6 is-arrowless">
                        PRODUCTOS
                    </a>

                    <div className="navbar-dropdown is-boxed">
                        <a className="navbar-item subtitle is-6">
                            <NavLink to={`/category/cascos`} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}><h4>CASCOS</h4></NavLink>
                        </a>
                        <a className="navbar-item subtitle is-6">
                            <NavLink to={`/category/cubiertas`} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}> <h4>CUBIERTAS</h4></NavLink>
                        </a>
                        <a className="navbar-item subtitle is-4subtitle is-6">
                            <NavLink to={`/category/indumentaria`} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}><h4> INDUMENTARIA</h4></NavLink>
                        </a>
                        <a className="navbar-item subtitle is-6">
                            <NavLink to={`/category/repuestosengeneral`} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}><h4> REPUESTOS EN GENERAL</h4></NavLink>
                        </a>
                    </div>
                </div>
                <div className="navbar-end">
                    <CartWidget />
                </div>
            </div>

        </nav>


    )

}

export default NavBar;