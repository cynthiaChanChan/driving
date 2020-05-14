type NavItem = {
    content: string;
    title?: string;
    url: string;
};

const navList: NavItem[] = [
    {
        content: "驾悦传媒",
        url: "http://jy.i-driving.cn",
    },
    {
        content: "识伯乐",
        url: "http://sbl.i-driving.cn/",
    },
    {
        content: "3号学车",
        url: "https://www.3hxc.cn",
    },
    {
        content: "关于驾悦",
        title: "驾悦集团-关于驾悦-深圳五八驾悦信息网络科技有限公司",
        url: "/?section=driving#driving",
    },
    {
        content: "联系我们",
        title: "驾悦集团-联系我们-广州驾悦信息科技有限公司",
        url: "/?section=contact#contact",
    },
];

export default navList;
