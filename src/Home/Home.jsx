import { Helmet } from "react-helmet-async";
import Banner from "../Pages/Banner/Banner";
import Footer from "../Pages/Footer/Footer";
import TeamMember from "../Pages/TeamMember/TeamMember";
import PopularService from "../Pages/PopularService/PopularService";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularService></PopularService>
            <TeamMember></TeamMember>
            <Footer></Footer>
        </div>
    );
};

export default Home;