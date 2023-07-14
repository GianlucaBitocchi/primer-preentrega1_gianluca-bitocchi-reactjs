import NavBar from "./components/NavBar";

import LogoGb from "./img/LogoGb.png";
import Carrito from "./img/Carrito.png";

import "bulma/css/bulma.css";

function App() {

    return (

        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <figure class="image is-96x96">
                    <NavBar img={LogoGb} />
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
                        INICIO
                    </a>

                    <a class="navbar-item">
                        PRODUCTOS
                    </a>
                </div>

                <div>
                <figure class="image is-64x64">
                    <NavBar img={Carrito} />
                </figure>
                </div>
                
            </div>



        </nav >


    )

}

export default App;