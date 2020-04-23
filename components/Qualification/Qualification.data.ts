export type QualificationItem = {
    imgUrl: string;
    title: string;
    isWide?: boolean;
};

type QualificationList = QualificationItem[];

const qualificationList: QualificationList = [
    {
        imgUrl: "patent_cert.jpg",
        title: "发明专利",
        isWide: true,
    },
    {
        imgUrl: "stock_cert.jpg",
        title: "股权代码",
        isWide: true,
    },
    {
        imgUrl: "icp_cert.jpg",
        title: "ICP证书",
    },
    {
        imgUrl: "software_cert1.jpg",
        title: "软件著作",
    },
    {
        imgUrl: "software_cert2.jpg",
        title: "软件著作",
    },
    {
        imgUrl: "software_cert3.jpg",
        title: "软件著作",
    },
    {
        imgUrl: "software_cert4.jpg",
        title: "软件著作",
    },
    {
        imgUrl: "software_cert5.jpg",
        title: "软件著作",
    },
    {
        imgUrl: "software_cert6.jpg",
        title: "软件著作",
    },
    {
        imgUrl: "software_cert7.jpg",
        title: "软件著作",
    },
    {
        imgUrl: "software_cert8.jpg",
        title: "软件著作",
    },
];

export default qualificationList;
