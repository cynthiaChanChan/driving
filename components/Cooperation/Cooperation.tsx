import { useRef, useEffect } from "react";
import { useRouter } from "next/router";

import Heading from "../Heading/Heading";
import cooperation from "./Cooperation.data";
import CooperationCard from "../CooperationCard/CooperationCard";

import styles from "./Cooperation.module.scss";

const Cooperation = () => {
    const heading = { title: "Cooperation", subTitle: "咨询合作" };
    const contactEle = useRef<null | HTMLElement>(null);
    const router = useRouter();

    return (
        <section
            className={`${styles.cooperation} offset`}
            id="contact"
            ref={contactEle}
        >
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
