import VisibilitySensor from "react-visibility-sensor";
import { useState, useCallback, useEffect } from "react";

import styles from "./Heading.module.scss";
import { useRouter } from "next/router";

type HeadingProps = {
    heading: {
        title: string;
        subTitle: string;
    };
    className?: string;
};

const Heading = ({ heading: { title, subTitle }, className }: HeadingProps) => {
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
            className={`${styles.wrapper} ${
                isElemVisible ? styles.animation : ""
            }`}
        >
            <div className={`${styles.subBox} ${className}`}>
                <VisibilitySensor onChange={handleChange}>
                    <h3 className={styles.sub_heading}>{subTitle}</h3>
                </VisibilitySensor>
                <div className={styles.line} />
            </div>
            <h2 className={styles.heading}>{title}</h2>
        </div>
    );
};

export default Heading;
