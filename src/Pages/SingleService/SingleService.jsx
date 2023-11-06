import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const SingleService = () => {

    const singeService = useLoaderData();
    const { image, service_name, profile, name, price, description } = singeService;


    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-4xl mx-auto my-10 px-10">
                <div className=" bg-base-100 md:flex h-[300px] items-center shadow-2xl">
                    <div className=' flex h-full items-center flex-1'>
                        <img className='md:rounded-l-lg h-full w-full' src={image} alt="" />
                    </div>
                    <div className='flex items-center flex-1'>
                        <div className="card-body ">                          
                            <div className='flex gap-3 items-center'>
                                <div>
                                    <img src={profile} className="w-[30px] h-[30px] rounded-full" alt="" />
                                </div>
                                <div>
                                    <h4 className='font-semibold text-[18px] italic'>{name}</h4>
                                </div>

                            </div>
                            <h2 className="text-black font-bold text-xl md:text-2xl italic">Service: {service_name}</h2>
                            <h2 className="text-black font-medium text-[18px] md:text-xl italic">Price: ${price}</h2>
                            <h2 className="text-black font-medium italic"> {description}</h2>
                            <div>
                                <button className="bg-[#009866] border-none italic text-white py-2 md:py-3 px-4 md:px-5 font-semibold rounded-lg">Book Now</button>
                            </div>



                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleService;