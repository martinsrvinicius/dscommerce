import './styles.css'

import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import HeaderClient from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import { ProductDTO } from '../../models/product';


const product: ProductDTO = {
  id: 2,
  name: "Smart TV",
  description: "Esta TV é inteligente",
  imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg",
  price: 2999.50,
  categories: [
    {
      id: 2,
      name: "Eletrónicos"
    },
    {
      id: 3,
      name: "Home"
    },
    {
      id: 4,
      name: "Importados"
    },
  ]

}

export default function ProductDetails() {

  return (
    <>
      <HeaderClient />
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProductDetailsCard product={product} />
          <div className="dsc-btn-page-container">
            <ButtonPrimary />
            <ButtonInverse />
          </div>
        </section>
      </main>
    </>
  );
}