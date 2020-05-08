export type CooperationItem = {
    title: string;
    subTitle: string;
    webside: string;
    phone: string;
    mail: string;
};

type Cooperation = CooperationItem[];

const cooperation: Cooperation = [
    {
        title: "「车企咨询合作」",
        subTitle: "驾悦传媒 事业部",
        webside: "http://jy.i-driving.cn",
        phone: "139 1085 3209",
        mail: "richard.shi@i-driving.cn",
    },
    {
        title: "「驾校咨询合作」",
        subTitle: "识伯乐 事业部",
        webside: "http://sbl.i-driving.cn",
        phone: "189 9839 0937",
        mail: "shibole@i-driving.cn",
    },
    {
        title: "「学车咨询合作」",
        subTitle: "3号学车 事业部",
        webside: "http://xc.3hxc.cn",
        phone: "137 6062 9896",
        mail: "skye.lau@i-driving.cn",
    },
];

export default cooperation;
