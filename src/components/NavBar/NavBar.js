import LogoGb from "../../img/LogoGb.png";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {

return (

    <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <figure class="image is-96x96">
                    <img src={LogoGb}/>
                </figure>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">

                    <a class="navbar-item">
                       <h3>INICIO</h3> 
                    </a>

                    <a class="navbar-item">
                    <h3>PRODUCTOS</h3> 
                    </a>
                </div>

                <div>
                <figure class="image is-32x32">
                    <CartWidget/>
                </figure>
                </div>
                
            </div>

        </nav >
)

}

export default NavBar;