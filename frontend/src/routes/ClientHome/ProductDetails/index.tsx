import './styles.css'

import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import { useParams } from 'react-router-dom';
import * as productService from '../../../services/product-service';
import { Link } from 'react-router-dom';
import { ProductDTO } from '../../../models/product';
import { useEffect, useState } from 'react';


export default function ProductDetails() {

  const params = useParams();

  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {
    productService.findById(Number(params.productId))
      .then(response => {
        console.log(response);
        const prod = response.data
        setProduct(prod);
      })
  }, [])

  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        {
          product &&
          <ProductDetailsCard product={product} />
        }
        <div className="dsc-btn-page-container">
          <ButtonPrimary text="Comprar" />
          <Link to="/">
            <ButtonInverse text="Início" />
          </Link>
        </div>
      </section>
    </main>
  );
}