import LogoGb from "../../img/LogoGb.png";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {

    return (

        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <figure className="image is-96x96">
                    <img src={LogoGb} />
                </figure>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">

                    <a className="navbar-item">
                        <h3>INICIO</h3>
                    </a>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            PRODUCTOS
                        </a>

                        <div className="navbar-dropdown">
                            <a className="navbar-item">
                                CASCOS
                            </a>
                            <a className="navbar-item">
                                CUBIERTAS
                            </a>
                            <a className="navbar-item">
                                REPUESTOS EN GENERAL
                            </a>
                            
                        </div>
                    </div>
                </div>

                <div>
                    <figure className="image is-32x32">
                        <CartWidget />
                    </figure>
                </div>

            </div>

        </nav >
    )

}

export default NavBar;