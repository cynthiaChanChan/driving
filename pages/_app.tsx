import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../sass/app.scss";
import { NextComponentType, NextPageContext } from "next";

type MyAppProps = {
    Component: NextComponentType<NextPageContext>;
    pageProps: any;
};

const MyApp = ({ Component, pageProps }: MyAppProps) => {
    return <Component {...pageProps} />;
};

export default MyApp;
