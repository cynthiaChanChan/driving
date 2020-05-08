import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.scss";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
    <>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
    </>
);

export default Layout;
