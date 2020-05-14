import { useState, useCallback } from "react";
import { QualificationItem } from "../Qualification/Qualification.data";
import WithPortal from "../WithPortal/WithPortal";

import styles from "./Card.module.scss";

type CardProps = {
    card: QualificationItem;
};

const Card = ({ card: { imgUrl, title, isWide } }: CardProps) => {
    const [isPopupHidden, setIsPopupHidden] = useState(true);
    const handleClick = useCallback(() => {
        setIsPopupHidden(!isPopupHidden);
    }, [isPopupHidden]);
    return (
        <div className={styles.card}>
            <div className={styles.imgBox} onClick={handleClick}>
                <div className={isWide ? styles.wide : ""}>
                    <img src={imgUrl} alt="qualification" />
                </div>
            </div>
            <h4 className={styles.heading}>{title}</h4>
            {!isPopupHidden && (
                <WithPortal selector="#modal">
                    <div className={styles.popupBox} onClick={handleClick}>
                        <div
                            className={`${styles.popup} ${
                                isWide ? styles.wide : ""
                            }`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className={styles.imgContainer}>
                                <div
                                    className={styles.close}
                                    onClick={handleClick}
                                >
                                    &#10005;
                                </div>
                                <img src={imgUrl} alt="qualification" />
                            </div>
                        </div>
                    </div>
                </WithPortal>
            )}
        </div>
    );
};

export default Card;
