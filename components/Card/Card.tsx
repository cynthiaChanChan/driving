import { QualificationItem } from "../Qualification/Qualification.data";
import styles from "./Card.module.scss";

type CardProps = {
    card: QualificationItem;
};

const Card = ({ card: { imgUrl, title, isWide } }: CardProps) => (
    <div className={styles.card}>
        <div className={styles.imgBox}>
            <a
                className={isWide ? styles.wide : ""}
                href={imgUrl}
                target="_blank"
            >
                <img src={imgUrl} alt="qualification" />
            </a>
        </div>
        <h4 className={styles.heading}>{title}</h4>
    </div>
);

export default Card;
