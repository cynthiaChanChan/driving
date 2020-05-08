import styles from "./GoTopButton.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

type GoTopButtonProps = {
    isvisible?: boolean;
};

const GoTopButton = ({ isvisible }: GoTopButtonProps) => {
    const router = useRouter();
    const [isFromLink, setIsFromLink] = useState(false);

    useEffect(() => {
        if (router.query.section === "contact") {
            setIsFromLink(true);
        } else {
            setIsFromLink(false);
        }
    }, [router.query.status]);

    if (isFromLink) {
        return null;
    }
    return (
        <Link href={router.route}>
            <a
                className={`${styles.button} ${
                    isvisible ? styles.visible : ""
                }`}
            ></a>
        </Link>
    );
};
export default GoTopButton;
