import Header from "../Header/Header";
import Footer from "../Footer/Footer";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
    <>
        <Header />
        {children}
        <Footer />
    </>
);

export default Layout;
