import './styles.css'
import SearchBar from '../../../components/SearchBar';
import CatalogCard from '../../../components/CatalogCard';
import ButtonNextPage from '../../../components/ButtonNextPage';
import { ProductDTO } from '../../../models/product';


const product: ProductDTO = {
    id: 2,
    name: "Smart Phone",
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


export default function Catalog() {
    return (
        <main>
            <section id="catalog-section" className="dsc-container">
                <SearchBar />

                <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">

                    <CatalogCard key={product.id} product={product} />

                </div>

                <ButtonNextPage />
            </section>
        </main>
    );
}