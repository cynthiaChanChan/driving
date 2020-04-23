import { QualificationItem } from "../Qualification/Qualification.data";
import styles from "./Card.module.scss";

type CardProps = {
    card: QualificationItem;
};

const Card = ({ card: { imgUrl, title, isWide } }: CardProps) => (
    <div className={styles.card}>
        <div className={styles.imgBox}>
            <img
                className={isWide ? styles.wide : ""}
                src={imgUrl}
                alt="qualification"
            />
        </div>
        <h4 className={styles.heading}>{title}</h4>
    </div>
);

export default Card;
