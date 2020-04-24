import styles from "./Cooperation.module.scss";
import Heading from "../Heading/Heading";
import cooperation from "./Cooperation.data";
import CooperationCard from "../CooperationCard/CooperationCard";

const Cooperation = () => {
    const heading = { title: "Cooperation", subTitle: "咨询合作" };
    return (
        <section className={styles.cooperation} id="contact">
            <Heading heading={heading} />
            <div className={styles.list}>
                {cooperation.map(
                    (item): React.ReactNode => (
                        <CooperationCard card={item} key={item.title} />
                    )
                )}
            </div>
        </section>
    );
};

export default Cooperation;
