import styles from "./Heading.module.scss";

type HeadingProps = {
    heading: {
        title: string;
        subTitle: string;
    };
    className?: string;
};

const Heading = ({ heading: { title, subTitle }, className }: HeadingProps) => (
    <div className={styles.wrapper}>
        <div className={`${styles.subBox} ${className}`}>
            <h3 className={styles.sub_heading}>{subTitle}</h3>
            <div className={styles.line} />
        </div>
        <h2 className={styles.heading}>{title}</h2>
    </div>
);

export default Heading;
