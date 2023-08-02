import ItemCount from "../ItemCount/ItemCount";
import CascoLsNegro from "../../img/CascoLsNegro.jpg";

const ItemDetail = ({ id, name, category, description, price, stock }) => {

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
                        <p className="m-2">CATEGORIA : {category}</p>
                        <p className="m-2">PRECIO : ${price}</p>
                        <p className="m-2">DESCRIPCION : {description}</p>
                    </section>
                    <footer>
                        <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("cantidad agregada:" , quantity)} />
                    </footer>
                </article>

            </div>
        </div>
    )
}

export default ItemDetail;