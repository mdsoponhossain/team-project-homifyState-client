import Banner from "../../components/homecomponents/banner/Banner";
import Choose from "../../components/homecomponents/choose/Choose";
import Features from "../../components/homecomponents/features/Features";
import LetesNews from "../../components/homecomponents/letestNews/LetesNews";

import Review from "../../components/homecomponents/review/review";
import Slider from "../../components/homecomponents/slider/Slider";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
                <Features></Features>
            </div>
            <LetesNews></LetesNews>
            <Choose></Choose>
            <Slider></Slider>
            <Review></Review>
        </div>
    );
};

export default Home;