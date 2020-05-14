import VisibilitySensor from "react-visibility-sensor";
import { useState, useCallback, useEffect } from "react";

import { ProductItem } from "../Products/Products.data";
import styles from "./Product.module.scss";
import { useRouter } from "next/router";

type ProductProps = {
    product: ProductItem;
};

const Product = ({ product }: ProductProps) => {
    const { icon, title, content, buttonName, url } = product;
    const [isElemVisible, setIsElemVisible] = useState(false);
    const router = useRouter();

    const handleChange = useCallback((isVisible: boolean): void => {
        isVisible && setIsElemVisible(true);
    }, []);

    useEffect(() => {
        setIsElemVisible(false);
    }, [router.query.section, router.query.status]);

    return (
        <div
            className={`${styles.product} ${
                isElemVisible ? styles.animation : ""
            }`}
        >
            <div className={styles.icon}>
                <img src={icon} alt="icon" />
            </div>

            <h3 className={styles.heading}>{title}</h3>
            <p className={styles.content}>{content}</p>
            <VisibilitySensor onChange={handleChange}>
                <a
                    className={styles.link}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {buttonName}
                </a>
            </VisibilitySensor>
        </div>
    );
};

export default Product;
