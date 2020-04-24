import styles from "./Banner.module.scss";

const Banner = () => (
    <section className={styles.banner}>
        <div className={styles.titleBox}>
            <h1 className={styles.heading}>
                <span>驾悦未来</span>创享人生
            </h1>
            <div className={styles.line} />
            <div className={styles.tag}>
                广告业务 / 数据营销 / 品牌策划 / 互联网O2O / 驾校服务升级优化
            </div>
            <div className={styles.tag}>
                驾培硬件及软件管理 / 互联网模式驾培
            </div>
        </div>
    </section>
);

export default Banner;
