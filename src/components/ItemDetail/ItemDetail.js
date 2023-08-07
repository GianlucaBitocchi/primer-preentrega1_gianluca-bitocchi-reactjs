import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({ img, name, price, color, stock }) => {

    return (

    
                <article id="detalles">
                    <header>
                        <p className="title is-6 has-text-dark m-2">
                            {name}
                        </p>
                    </header>
                    <figure>
                        <img src={img} alt={name} width={300} height={300} />
                    </figure>
                    <section className="title is-6 has-text-dark">   
                        <p className="m-2">PRECIO : ${price}</p>
                        <p className="m-2">COLOR : {color}</p>
                        <p className="m-2">STOCK DISPONIBLE : {stock}.u </p>
                    </section>
                    <footer>
                        <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("cantidad agregada:", quantity)} />
                    </footer>
                </article>

    )
}

export default ItemDetail;