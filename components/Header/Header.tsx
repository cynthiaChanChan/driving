import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Header.module.scss";
import navList from "./Header.data";

const Header = () => {
    const route = useRouter().route;

    return (
        <header className={styles.header}>
            <div className={`${styles.container} container`}>
                <Link href="/">
                    <a className={styles.logo}>
                        <img src="/logo.jpg" alt="logo" />
                    </a>
                </Link>
                <ul className={styles.nav_list}>
                    {navList.map(
                        ({ url, content }, idx): React.ReactNode => (
                            <li
                                key={idx}
                                className={route === url ? styles.active : ""}
                            >
                                {url.includes("http") ? (
                                    <a href={url}>{content}</a>
                                ) : (
                                    <Link href={url}>
                                        <a>{content}</a>
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
