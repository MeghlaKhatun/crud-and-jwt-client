import { Helmet } from "react-helmet-async";
import Banner from "../Pages/Banner/Banner";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <h2>home</h2>
        </div>
    );
};

export default Home;