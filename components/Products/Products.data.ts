export type ProductItem = {
    icon: string;
    title: string;
    content: string;
    buttonName: string;
    url: string;
};

type Products = ProductItem[];

const products: Products = [
    {
        icon: "/3hxc_icon.png",
        title: "中国大型品牌驾校媒体",
        content:
            "致力于为客户提供高品质广告发布、驾校深度活动等渠道增值服务，将品牌声音有效持续传递给潜在购车人群的驾校市场",
        buttonName: "更多详情",
        url: "http://jy.i-driving.cn",
    },
    {
        icon: "/sbl_icon.png",
        title: "行业领先的驾校服务商",
        content:
            "集营销策划，高科技设备，高精度智能模拟教学系统、数据分析管理系统，为驾校的运营管理提供一体化解决方案",
        buttonName: "更多详情",
        url: "http://sbl.i-driving.cn/",
    },
    {
        icon: "/driving_icon.png",
        title: "专业智能驾校",
        content:
            "考驾照就找3号学车。通过智能教学引领学车潮流，学员快速拿证实现5年零差评",
        buttonName: "更多详情",
        url: "https://www.3hxc.cn",
    },
];

export default products;
