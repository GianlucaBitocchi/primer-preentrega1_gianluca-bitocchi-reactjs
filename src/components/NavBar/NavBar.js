import LogoGb from "../../img/LogoGb.png";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {

    return (

        <nav className="navbar is-black" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <figure className="image is-96x96 ml-4">
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
                        <p className="title is-6 has-text-success">INICIO</p>
                    </a>

                    <a className="navbar-item">
                        <p className="title is-6 has-text-success">CONTACTANOS</p>
                    </a>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            <p className="title is-6 has-text-success"> PRODUCTOS </p>
                        </a>

                        <div className="navbar-dropdown is-boxed">
                            <a className="navbar-item">
                                CASCOS
                            </a>
                            <a className="navbar-item">
                                CUBIERTAS
                            </a>
                            <a className="navbar-item">
                                INDUMENTARIA
                            </a>
                            <a className="navbar-item">
                                REPUESTOS EN GENERAL
                            </a>
                        </div>

                    </div>
                </div>

                <div className="navbar-item">
                    <div className="navbar-end">
                        <figure className=" image is-24x24 mr-4">
                            <CartWidget />
                        </figure>
                    </div>
                </div>
            
        </div>

        </nav >
    )

}

export default NavBar;