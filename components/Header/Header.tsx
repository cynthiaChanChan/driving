import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Header.module.scss";
import navList from "./Header.data";

const Header = () => {
    const router = useRouter();
    const [isClicked, setIsClicked] = useState(false);

    useEffect((): void => {
        const body = document.querySelector("body");
        if (body) {
            body.className = isClicked ? "fixed" : "";
        }
    }, [isClicked]);

    const handleClick = useCallback(() => {
        setIsClicked(!isClicked);
    }, [isClicked]);

    const handleLinkClick = useCallback(
        (e, href) => {
            const body = document.querySelector("body");
            if (body) {
                body.className = "";
            }
            setIsClicked(false);
            if (href.includes("section")) {
                const status = router.query.status === "true";
                e.preventDefault();
                router.push(`${href}&status=${!status}`);
            }
        },
        [isClicked]
    );

    return (
        <header className={styles.header}>
            <div className={`${styles.container} container`}>
                <Link href="/">
                    <a
                        className={styles.logo}
                        onClick={(e) => handleLinkClick(e, "/")}
                    >
                        <img src="/logo.jpg" alt="logo" />
                    </a>
                </Link>
                <div
                    className={`${styles.nav_button} ${
                        isClicked ? styles.expand : ""
                    }`}
                    onClick={handleClick}
                >
                    <span className={styles.nav_icon}>&nbsp;</span>
                </div>
                <ul
                    className={`${styles.nav_list} ${
                        isClicked ? styles.open : ""
                    }`}
                >
                    <li className={router.route === "/" ? styles.active : ""}>
                        <Link href="/">
                            <a onClick={(e) => handleLinkClick(e, "/")}>
                                首&nbsp;&nbsp;页
                            </a>
                        </Link>
                    </li>
                    {navList.map(
                        ({ url, content }, idx): React.ReactNode => (
                            <li
                                key={idx}
                                className={
                                    router.route === url ? styles.active : ""
                                }
                            >
                                {url.includes("http") ? (
                                    <a
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {content}
                                    </a>
                                ) : (
                                    <Link href={url}>
                                        <a
                                            onClick={(e) =>
                                                handleLinkClick(e, url)
                                            }
                                        >
                                            {content}
                                        </a>
                                    </Link>
                                )}
                            </li>
                        )
                    )}
                    <li>股权代码:&nbsp;&nbsp;293121</li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
