import './Product.css'

// function buyBike() {
//     console.log("Comprando bike")
// }
// //La no HTML button fica assim
// <button onClick={() => buyBike()}>Comprar</button>

const buyBike = () => {
    console.log("Comprando bike")
}

function Product() {
    return (
        <>
            <div className="cardProduct">
                <div>
                    <img src="https://www.origamid.com/projetos/bikcraft/img/bicicletas/magic-home.jpg" alt="Foto da Bicicleta Magic Might" />
                    <h3 className="model">Magic Might</h3>
                    <p className="price">R$ 2499</p>

                    <button onClick={buyBike}>Comprar</button>
                </div>
                <div></div>
                <div></div>
            </div>
        </>
    )
}

export default Product