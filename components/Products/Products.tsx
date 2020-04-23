import styles from "./Products.module.scss";
import products from "./Products.data";
import Product from "../Product/Product";

const Products = () => (
    <section className={styles.products}>
        <div className={`container ${styles.container}`}>
            {products.map(
                (product): React.ReactNode => (
                    <Product product={product} key={product.title} />
                )
            )}
        </div>
    </section>
);

export default Products;
