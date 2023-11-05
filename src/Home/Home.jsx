import { Helmet } from "react-helmet-async";
import Banner from "../Pages/Banner/Banner";
import Footer from "../Pages/Footer/Footer";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Home;