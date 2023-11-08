import { useEffect, useState } from "react";
import PopularServiceCard from "./PopularServiceCard";
import { Link } from "react-router-dom";


const PopularService = () => {

    const [services, setServices] = useState([]);
    // const [cards,setCards]=useState(4)

    useEffect(() => {
        fetch ("https://ass-crud-and-jwt-server.vercel.app/service")
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setServices(data)
            })
    }, [])

    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-center text-[#215946] text-2xl italic md:text-3xl lg:text-5xl  font-bold mb-4">Popular Service</h2>
            <p className='text-[16px] font-semibold w-full px-4 md:px-0 md:w-1/2 text-center mx-auto mt-2 mb-8'>Home exchange, also known as house swapping, is a form of lodging in which two parties agree to offer each other homestays for a set period of time. </p>
            <div className="grid grid-col-1 gap-6 md:grid-cols-2 max-w-5xl mx-auto px-10">
                {
                    services.slice(0, 4).map(service => <PopularServiceCard key={service._id} service={service}></PopularServiceCard>)
                }
            </div>
            <div className="flex justify-center items-center mt-10">
                <Link to={"/allService"} className=" bg-[#009866] border-none text-white py-3 px-6 font-semibold rounded-lg">Show All</Link>
            </div>
        </div>
    );
};

export default PopularService;