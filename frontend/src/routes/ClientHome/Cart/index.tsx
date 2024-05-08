import './styles.css';

const cart = {
    items: [
        {
            "productId": 3,
            "name": "Macbook Pro",
            "price": 1250.0,
            "quantity": 1,
            "imgUrl": "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/3-big.jpg",
            "subTotal": 1250.0
        },
        {
            "productId": 1,
            "name": "The Lord of the Rings",
            "price": 90.5,
            "quantity": 2,
            "imgUrl": "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/1-big.jpg",
            "subTotal": 181.0
        }
    ]
}

export default function Cart() {
    return (
        <main>
            <section id="cart-container-section" className="dsc-container">
                <div className="dsc-card dsc-mb20">
                    {
                        cart.items.map(items => (
                            <div key={items.productId} className="dsc-cart-item-container dsc-line-bottom">
                                <div className="dsc-cart-item-left">
                                    <img src={items.imgUrl} alt={items.name} />
                                    <div className="dsc-cart-item-description">
                                        <h3>{items.name}</h3>
                                        <div className="dsc-cart-item-quantity-container">
                                            <div className="dsc-cart-item-quantity-btn">-</div>
                                            <p>{items.quantity}</p>
                                            <div className="dsc-cart-item-quantity-btn">+</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dsc-cart-item-right">
                                    R$ {(items.price * items.quantity).toFixed(2)}
                                </div>
                            </div>
                        ))
                    }


                    <div className="dsc-cart-total-container">
                        <h3>R$ 15000,00</h3>
                    </div>
                </div>
                <div className="dsc-btn-page-container">
                    <div className="dsc-btn dsc-btn-blue">
                        Finalizar pedido
                    </div>
                    <div className="dsc-btn dsc-btn-white">
                        Continuar comprando
                    </div>
                </div>
            </section>
        </main>
    )
}