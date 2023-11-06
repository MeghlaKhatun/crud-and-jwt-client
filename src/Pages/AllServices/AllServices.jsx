import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import AllService from "./AllService";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const AllServices = () => {
    const [seeAll, setSeeAll] = useState(6);
    const allCards = useLoaderData();

    const [filteredAllCards, setFilteredCards] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();
        const search = e.target.text.value.trim().toLowerCase();
        const filter = allCards.filter(
            (allCard) =>
                allCard.service_name.toLowerCase().indexOf(search) !== -1
        );
        setFilteredCards(filter);
    };

    useEffect(() => {
        setFilteredCards(allCards);
    }, [allCards]);

    return (
        <div>
            <Helmet>
                <title>All-Services</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8 my-20 px-10">
                {/* search section */}
                <form onSubmit={handleSearch} className="mx-auto">
                    <div className="mt-10">
                        <input
                            className="text-black border outline-none rounded-lg md:rounded-full py-3 md:py-4 pl-4 pr-[40px] md:pr-[200px] lg:pr-[350px]"
                            type="text"
                            placeholder="Search here...."
                            name="text"
                            id=""
                        />
                    </div>
                    <div className="md:absolute mt-4 md:mt-[-57px] flex justify-center  md:ml-[300px] lg:ml-[450px]">
                        <input
                            className="bg-[#009688] text-[16px] font-semibold py-2 md:py-4 px-10 cursor-pointer text-white rounded-lg md:rounded-r-full "
                            type="submit"
                            value="Search"
                        />
                    </div>
                </form>
            </div>

            {/* all service */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8 my-20 px-10">
                {filteredAllCards.slice(0, seeAll).map((card) => (
                    <AllService key={card._id} card={card}></AllService>
                ))}
            </div>

            {seeAll < filteredAllCards.length && (
                <div className="flex justify-center mb-20">
                    <button
                        onClick={() => setSeeAll(seeAll + 6)}
                        className="bg-[#009866] border-none text-white py-3 px-5 font-semibold rounded-lg"
                    >
                        More Service
                    </button>
                </div>
            )}

            <Footer></Footer>
        </div>
    );
};

export default AllServices;
