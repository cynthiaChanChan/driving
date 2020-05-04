import styles from "./AboutUs.module.scss";
import Heading from "../Heading/Heading";

const AboutUs = () => {
    const heading = { title: "About us", subTitle: "关于驾悦" };
    return (
        <section className={styles.about} id="i-driving">
            <div className="container">
                <div className={styles.wrapper}>
                    <Heading heading={heading} />
                    <p>
                        深圳五八驾悦信息网络科技有限公司
                        成立于深圳，注册资金1000万，已在广州股权交易中心挂牌（股权代码：293121）。
                    </p>
                    <p>
                        驾悦集团总部设在深圳，在广州、上海、成都、北京、武汉设有办事处，国内253个城市有业务合作网络，覆盖全国各大区。
                    </p>
                    <p>
                        集团主营业务：广告业务、数据营销、品牌策划、互联网O2O、驾校服务升级优化、驾培硬件及软件管理、互联网模式驾培等。
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
