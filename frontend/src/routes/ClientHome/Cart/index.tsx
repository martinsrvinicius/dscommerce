import './styles.css';
import * as cartService from '../../../services/cart-service';
import { useEffect, useState } from 'react';
import { OrderDTO, OrderItemDTO } from '../../../models/order';


const item1 : OrderItemDTO = new OrderItemDTO(
    7,1,"PC Gamer", 1250.0, "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/3-big.jpg"
);

const item2 : OrderItemDTO = new OrderItemDTO(
    9,1,"Macbook Pro", 181.0, "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/1-big.jpg"
);



export default function Cart() {

    const [cart, setCart] = useState<OrderDTO>(cartService.getCart());

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