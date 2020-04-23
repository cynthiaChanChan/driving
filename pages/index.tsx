import Layout from "../components/Layout/Layout";
import Banner from "../components/Banner/Banner";
import Products from "../components/Products/Products";
import AboutUs from "../components/AboutUs/AboutUs";
import Qualification from "../components/Qualification/Qualification";
import Cooperation from "../components/Cooperation/Cooperation";

export default function Home() {
    return (
        <Layout>
            <Banner />
            <Products />
            <AboutUs />
            <Qualification />
            <Cooperation />
        </Layout>
    );
}