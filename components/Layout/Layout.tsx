import Header from "../Header/Header";
import Footer from "../Footer/Footer";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
);

export default Layout;
