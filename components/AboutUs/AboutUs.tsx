import VisibilitySensor from "react-visibility-sensor";
import { useRouter } from "next/router";
import { useEffect, useRef, useState, useCallback } from "react";
import Heading from "../Heading/Heading";

import styles from "./AboutUs.module.scss";

const AboutUs = () => {
    const heading = { title: "About us", subTitle: "关于驾悦" };
    const aboutEle = useRef<null | HTMLElement>(null);
    const router = useRouter();
    const [isElemVisible, setIsElemVisible] = useState(false);

    const handleChange = useCallback((isVisible: boolean): void => {
        isVisible && setIsElemVisible(true);
    }, []);

    useEffect(() => {
        setIsElemVisible(false);
    }, [router.query.section, router.query.status]);
    return (
        <section
            className={`${styles.about} offset`}
            id="driving"
            ref={aboutEle}
        >
            <div className={styles.aboutContainer}>
                <div className="container">
                    <div
                        className={`${styles.wrapper} ${
                            isElemVisible ? styles.animation : ""
                        }`}
                    >
                        <Heading heading={heading} />
                        <VisibilitySensor onChange={handleChange}>
                            <p>
                                深圳五八驾悦信息网络科技有限公司
                                成立于深圳，注册资金1000万，已在广州股权交易中心挂牌（股权代码：293121）。
                            </p>
                        </VisibilitySensor>
                        <p>
                            驾悦集团总部设在深圳，在广州、上海、成都、北京、武汉设有办事处，国内253个城市有业务合作网络，覆盖全国各大区。
                        </p>
                        <p>
                            集团主营业务：广告业务、数据营销、品牌策划、互联网O2O、驾校服务升级优化、驾培硬件及软件管理、互联网模式驾培等。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
