import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Routes/Provider/AuthProvider";

const SingleService = () => {

    const { user } = useContext(AuthContext)

    const singeService = useLoaderData();
    const { image, service_name, email, profile, name, price, description } = singeService;


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


                            {/* modal section */}

                            {/* You can open the modal using document.getElementById('ID').showModal() method */}

                            <div>
                                <button onClick={() => document.getElementById('my_modal_3').showModal()} className="bg-[#009866] border-none italic text-white py-2 md:py-3 px-4 md:px-5 font-semibold rounded-lg">Book Now</button>
                            </div>

                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>

                                    {/* main form */}
                                    <div>
                                        <img src={image} alt="" />
                                    </div>

                                    <form>

                                        <div className="form-control pt-2 flex-1">
                                            <input type="text" name="serviceName" defaultValue={service_name} readOnly className="input font-bold input-bordered text-gray-600" required />
                                        </div>

                                        <div className="form-control pt-2 flex-1">
                                            <input type="text" name="proEmail" defaultValue={email} readOnly className="input font-bold input-bordered text-gray-600" required />
                                        </div>

                                        <div className="form-control pt-2 flex-1">
                                            <input type="text" name="user" defaultValue={user?.email} readOnly className="input font-bold input-bordered text-gray-600" required />
                                        </div>

                                        <div className="form-control pt-2 flex-1">
                                            <input type="text" name="price" defaultValue={price} className="input font-bold input-bordered text-gray-600" required />
                                        </div>

                                        <div className="form-control pt-2 flex-1">
                                            <input type="date" name="date" className="input input-bordered text-black" required />
                                        </div>

                                        <div className="form-control pt-2 flex-1">
                                            <textarea name="description" id="" cols="10" rows="3" placeholder="Special Instruction" className="border-2 rounded-lg outline-none text-black"></textarea>
                                        </div>

                                    </form>

                                    <div className="flex items-center justify-center mt-4">
                                        <button className="bg-[#009866] border-none italic text-white py-2 md:py-3 px-4 md:px-5 font-semibold rounded-lg">Purchase</button>
                                    </div>

                                </div>
                            </dialog>




                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default SingleService;