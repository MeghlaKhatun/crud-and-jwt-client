import { Helmet } from "react-helmet-async";
import Banner from "../Pages/Banner/Banner";
import Footer from "../Pages/Footer/Footer";
import TeamMember from "../Pages/TeamMember/TeamMember";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <TeamMember></TeamMember>
            <Footer></Footer>
        </div>
    );
};

export default Home;