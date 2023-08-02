import {Link} from "react-router-dom";
import CascoLsNegro from "../../img/CascoLsNegro.jpg";

const Item = ({ name, price, stock }) => {

    return (
        <div className="columns">
            <div className="column">
                <article className="has-background-black">
                    <header>
                        <p className="title is-4 has-text-success m-2">
                            {name}
                        </p>
                    </header>
                    <figure className="image is-128x128 is-rounded">
                        <img src={CascoLsNegro} alt={name} className="m-2" />
                    </figure>
                    <section className="title is-4 has-text-success">
                        <p className="m-2">PRECIO : ${price}</p>
                        <p className="m-2">STOCK DISPONIBLE : {stock} </p>
                    </section>
                    <footer>
                        <Link to={"/item/$ {id}"}>VER DETALLE </Link>
                    </footer>
                </article>
            </div>
        </div>

    )
}

export default Item;