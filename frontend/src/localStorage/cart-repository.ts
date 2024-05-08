import { OrderDTO } from "../models/order";

export function save(cart: OrderDTO) {
    const str = JSON.stringify(cart);
    localStorage.setItem("com.vinim.dscommerce/Cart", str);
}

export function get(): OrderDTO {
    const str = localStorage.getItem("com.vinim.dscommerce/Cart") || '{"items" = []}';
    return JSON.parse(str);
}