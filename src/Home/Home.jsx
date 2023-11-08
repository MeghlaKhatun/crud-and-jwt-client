import { Helmet } from "react-helmet-async";
import Banner from "../Pages/Banner/Banner";
import Footer from "../Pages/Footer/Footer";
import TeamMember from "../Pages/TeamMember/TeamMember";
import PopularService from "../Pages/PopularService/PopularService";
import Testimonials from "../Pages/Testimonials/Testimonials";
import ContactUs from "../Pages/ContactUs/ContactUs";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home Exchange | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularService></PopularService>
            <TeamMember></TeamMember>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;