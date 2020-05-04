import styles from "./Footer.module.scss";
import Heading from "../Heading/Heading";

const Footer = () => {
    const year = new Date().getFullYear();
    const heading = { title: "Contact us", subTitle: "联系我们" };

    return (
        <footer className={styles.footer}>
            <Heading heading={heading} className={styles.heading} />

            <div className={styles.wrapper}>
                <div className={styles.message}>
                    <p>深圳总部</p>
                    <p>深圳五八驾悦信息网络科技有限公司</p>
                    <a
                        href="https://ditu.amap.com/place/B0FFFDBK1H"
                        target="_black"
                        rel="noopener noreferrer"
                    >
                        地址：深圳市福田区园岭街道39号10栋
                    </a>
                </div>
                <div className={styles.message}>
                    <p>广州分公司</p>
                    <p>广州驾悦信息科技有限公司</p>
                    <a
                        href="https://ditu.amap.com/place/B00140TY9J"
                        target="_black"
                        rel="noopener noreferrer"
                    >
                        地址：广州市天河区天河路490号壬丰大厦9层
                    </a>
                </div>
            </div>
            <div className={styles.copyright}>
                <span>粤ICP备14098329号-1</span>Copyright &copy; {year}-
                {year + 3}
                &nbsp;i-driving 驾悦集团 版权所有
            </div>
        </footer>
    );
};

export default Footer;
