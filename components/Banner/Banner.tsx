import styles from "./Banner.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Banner = () => {
    const router = useRouter();
    const [animation, setAnimation] = useState(false);

    useEffect(() => {
        setAnimation(!animation);
    }, [router.query.section, router.query.status]);
    return (
        <section className={styles.banner}>
            <div
                className={`${styles.titleBox} ${
                    animation ? styles.animation : ""
                }`}
            >
                <h1 className={styles.heading}>
                    <span>驾悦未来</span>创享人生
                </h1>
                <div className={styles.line} />
                <div className={styles.tag}>
                    广告业务 / 数据营销 / 品牌策划 / 互联网O2O /
                    驾校服务升级优化
                </div>
                <div className={styles.tag}>
                    驾培硬件及软件管理 / 互联网模式驾培
                </div>
            </div>
        </section>
    );
};

export default Banner;
