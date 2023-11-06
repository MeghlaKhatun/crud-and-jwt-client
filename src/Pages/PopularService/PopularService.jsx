import { useEffect, useState } from "react";
import PopularServiceCard from "./PopularServiceCard";
import { Link } from "react-router-dom";


const PopularService = () => {

    const [services, setServices] = useState([]);
    // const [cards,setCards]=useState(4)

    useEffect(() => {
        fetch ("http://localhost:5000/service")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data)
            })
    }, [])

    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-center text-[#215946] text-2xl italic md:text-3xl lg:text-5xl  font-bold mb-8">Popular Service</h2>
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