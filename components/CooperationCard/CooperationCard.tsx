import styles from "./CooperationCard.module.scss";
import { CooperationItem } from "../Cooperation/Cooperation.data";

type CooperationCardProps = {
    card: CooperationItem;
};

const CooperationCard = ({ card }: CooperationCardProps) => {
    const { title, subTitle, webside, phone, mail } = card;
    return (
        <div className={styles.card}>
            <div className={styles.cardBox}>
                <h3 className={styles.heading}>{title}</h3>
                <p className={styles.sub_heading}>{subTitle}</p>
                <a href={webside} target="_blank" rel="noopener noreferrer">
                    网站：{webside}
                </a>
                <a href={`tel:${phone}`}>手机&amp;微信：{phone}</a>
                <a href={`mailto:${mail}`}>邮箱：{mail}</a>
            </div>

            <div className={styles.rectangle} />
            <div className={styles.rectangle} />
        </div>
    );
};

export default CooperationCard;
