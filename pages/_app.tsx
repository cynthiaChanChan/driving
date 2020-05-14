import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../sass/app.scss";
import { NextComponentType, NextPageContext } from "next";
import AppProvider from "../providers/app.provider";

type MyAppProps = {
    Component: NextComponentType<NextPageContext>;
    pageProps: any;
};

const MyApp = ({ Component, pageProps }: MyAppProps) => {
    return (
        <AppProvider>
            <Component {...pageProps} />
        </AppProvider>
    );
};

export default MyApp;
