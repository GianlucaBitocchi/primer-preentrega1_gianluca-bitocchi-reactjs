import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, img, name, price, description }) => {
    console.log(img);

    return (

        <article id="productos">
                <header>
                    <p className="title is-6 has-text-dark m-2">
                        {name}
                    </p>
                </header>
                <figure>
                    <img src={img} alt={name} width={150} height={150}/>
                </figure>
                <section className="title is-6 has-text-dark">
                    <p className="m-2">PRECIO : ${price}</p>
                    <p className="m-2">DESCRIPCION : {description}</p>
                </section>
                <footer>
                    <Link to={`/Item/${id}`} className="button is-success is-outlined">VER DETALLE </Link>
                </footer>
        </article>

    )
}

export default Item;