import "./ProductList.css"
import Product from "../product/Product.jsx"
import { products } from "../../data"

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">
                    Lorem Ipsum
                </h1>
                <p className="pl-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius justo vel ex cursus ornare ut vel ex. Vestibulum eget scelerisque quam, eget volutpat justo. Vivamus nisi ligula, luctus suscipit cursus sed, cursus non purus. Vivamus vel risus libero. Fusce bibendum sit amet justo eget sodales. Sed quis nisl libero. Suspendisse potenti. Quisque lorem lacus, porta ut eros a, luctus dictum lacus. Aliquam fermentum ligula nibh, id aliquam turpis venenatis in. Sed ante sem, aliquet quis mollis in, semper bibendum mauris.
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} />
                ))}
            </div>
        </div>
    )
}

export default ProductList 