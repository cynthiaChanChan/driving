import Head from "next/head";

import Layout from "../components/Layout/Layout";
import Banner from "../components/Banner/Banner";
import Products from "../components/Products/Products";
import AboutUs from "../components/AboutUs/AboutUs";
import Qualification from "../components/Qualification/Qualification";
import Cooperation from "../components/Cooperation/Cooperation";
import { useContext } from "react";
import { AppContext } from "../providers/app.provider";

export default function Home() {
    const { title } = useContext(AppContext);
    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="驾悦集团总部-深圳五八驾悦信息网络科技有限公司，分公司-广州驾悦信息科技有限公司。主营业务：汽车广告投放与策划、驾校学员数据营销、驾培服务升级优化、驾校硬件及软件管理、互联网模式驾培等。旗下事业部：驾悦传媒-全国驾校媒体。识伯乐-专注于高精度智能模拟学车设备与系统。3号学车-智能驾校高精度教学数据化管理。"
                />
                <meta
                    name="keyword"
                    content="驾悦，驾悦集团，驾校，驾培，驾校媒体，驾校服务，驾校管理，驾校系统，驾校广告，汽车广告投放，高精度智能学车，科目二科目三模拟考试系统，驾校硬件及软件管理，考驾照，互联网模式驾培，驾悦传媒，识伯乐，3号学车"
                />
                <title>{title}</title>
            </Head>
            <Layout>
                <Banner />
                <Products />
                <AboutUs />
                <Qualification />
                <Cooperation />
            </Layout>
        </>
    );
}
