import Slider from "react-slick";

import styles from "./Qualification.module.scss";
import Heading from "../Heading/Heading";
import qualificationList from "./Qualification.data";
import Card from "../Card/Card";

const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${styles.prevArrow} ${className}`}
            style={{ ...style }}
            onClick={onClick}
        >
            <img src="/arrow.png" alt="arrow" />
        </div>
    );
};

const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${styles.nextArrow} ${className}`}
            style={{ ...style }}
            onClick={onClick}
        >
            <img src="/arrow.png" alt="arrow" />
        </div>
    );
};

const Qualification = () => {
    const heading = { title: "qualification", subTitle: "公司资质" };
    const settings = {
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 500,
        cssEase: "linear",
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 200,
                },
            },
        ],
    };

    return (
        <section className={styles.qualification}>
            <div className={`container ${styles.container}`}>
                <Heading heading={heading} />
                <Slider {...settings} className={styles.slider}>
                    {qualificationList.map(
                        (item, idx): React.ReactNode => (
                            <Card key={idx} card={item} />
                        )
                    )}
                </Slider>
            </div>
        </section>
    );
};

export default Qualification;
