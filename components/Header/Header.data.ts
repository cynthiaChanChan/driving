type NavItem = {
    content: string;
    url: string;
};

const navList: NavItem[] = [
    {
        content: "首页",
        url: "/",
    },
    {
        content: "驾悦传媒",
        url: "http://ad.i-driving.cn/",
    },
    {
        content: "识伯乐",
        url: "http://sbl.i-driving.cn/",
    },
    {
        content: "3号学车",
        url: "https://www.3hxc.cn/",
    },
    {
        content: "关于驾悦",
        url: "/#i-driving",
    },
    {
        content: "联系我们",
        url: "/#about-us",
    },
];

export default navList;