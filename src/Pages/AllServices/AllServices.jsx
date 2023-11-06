import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import AllService from "./AllService";

const AllServices = () => {

    const allCards=useLoaderData();



    return (
        <div>
            <Navbar></Navbar>

            <div>
                
            </div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8 my-20 px-10">
                    {
                        allCards.map(card=><AllService key={card._id} card={card}></AllService>)
                    }
                </div>

            <Footer></Footer>
        </div>
    );
};

export default AllServices;