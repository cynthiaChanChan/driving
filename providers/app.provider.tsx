import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import navList from "../components/Header/Header.data";

type AppProviderProps = {
    children: React.ReactChild;
};
type AppContext = {
    title: string;
};

const options: AppContext = {
    title: "",
};
export const AppContext = createContext(options);

const AppProvider = ({ children }: AppProviderProps) => {
    const defaultTitle = "驾悦集团-驾悦传媒-识伯乐-3号学车";
    const [title, setTitle] = useState(defaultTitle);
    const router = useRouter();

    useEffect(() => {
        const title = document.querySelector("title");
        if (title && title.textContent) {
            const section = navList.find((elem) =>
                router.asPath.includes(elem.url)
            );
            const pageTitle = section ? section.title : defaultTitle;
            setTitle(pageTitle || defaultTitle);
        }
    }, [router]);
    return (
        <AppContext.Provider
            value={{
                title,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
