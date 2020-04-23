import { ProductItem } from "../Products/Products.data";
import styles from "./Product.module.scss";

type ProductProps = {
    product: ProductItem;
};

const Product = ({ product }: ProductProps) => {
    const { icon, title, content, buttonName, url } = product;
    return (
        <div className={styles.product}>
            <div className={styles.icon}>
                <img src={icon} alt="icon" />
            </div>

            <h3 className={styles.heading}>{title}</h3>
            <p className={styles.content}>{content}</p>
            <a
                className={styles.link}
                href={url}
                target="_black"
                rel="noopener noreferrer"
            >
                {buttonName}
            </a>
        </div>
    );
};

export default Product;
