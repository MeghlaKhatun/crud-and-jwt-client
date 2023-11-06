import { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../../Routes/Provider/AuthProvider";

const AddService = () => {

    const {user}=useContext(AuthContext)

    return (
        <div>
            <div className="w-full  mb-8 md:mb-10 lg:mb-20 bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/svw5KdF/house-1477041-1280.jpg)', objectFit: "cover" }}>
                <Navbar></Navbar>
                <div className="max-w-5xl text-center text-neutral-content mx-auto items-center ">

                    <div className="">
                        {/* input form */}

                        <form className=" w-full py-10 px-10 ">


                            {/* name and email */}
                            <div className="md:flex gap-6 w-full">
                                <div className="form-control pt-2 flex-1">
                                    <label className="label">
                                        <span className="label-text font-semibold text-white text-[16px] md:text-[18px]">Your Name</span>
                                    </label>
                                    <input type="text" name="name" defaultValue={`${user.displayName}`} readOnly className="input input-bordered text-black" required />
                                </div>

                                <div className="form-control pt-2 flex-1">
                                    <label className="label">
                                        <span className="label-text font-semibold text-white text-[16px] md:text-[18px]">Your Email</span>
                                    </label>
                                    <input type="email" name="email" defaultValue={`${user.email}`} readOnly className="input input-bordered text-black" required />
                                </div>

                            </div>


                            {/* img and service-name */}
                            <div className="md:flex gap-6 w-full">
                                <div className="form-control pt-2 flex-1">
                                    <label className="label">
                                        <span className="label-text font-semibold text-white text-[16px] md:text-[18px]">Photo URL</span>
                                    </label>
                                    <input type="text" name="image" placeholder="Service Photo URL" className="input input-bordered text-black" required />
                                </div>

                                <div className="form-control pt-2 flex-1">
                                    <label className="label">
                                        <span className="label-text font-semibold text-white text-[16px] md:text-[18px]">Service Name</span>
                                    </label>
                                    <input type="text" name="service-name" placeholder="Service Name" className="input input-bordered text-black" required />
                                </div>

                            </div>


                            {/* service-area and service-price */}
                            <div className="md:flex gap-6 w-full">
                                <div className="form-control pt-2 flex-1">
                                    <label className="label">
                                        <span className="label-text font-semibold text-white text-[16px] md:text-[18px]">Service Area</span>
                                    </label>
                                    <input type="text" name="area" placeholder="Area" className="input input-bordered text-black" required />
                                </div>

                                <div className="form-control pt-2 flex-1">
                                    <label className="label">
                                        <span className="label-text font-semibold text-white text-[16px] md:text-[18px]">Service Price</span>
                                    </label>
                                    <input type="text" name="price" placeholder="Price" className="input input-bordered text-black" required />
                                </div>

                            </div>


                            {/* short description */}
                            <div className="mb-8">
                                <div className="form-control pt-2">
                                    <label className="label">
                                        <span className="label-text font-semibold text-white text-[16px] md:text-[18px]">Description</span>
                                    </label>
                                    <textarea name="description" id="" cols="35" rows="5" className="border-2 rounded-lg outline-none text-black"></textarea>
                                </div>
                            </div>

                            <input type="submit" value="Add Service" className="py-3 cursor-pointer rounded-full md:font-bold hover:text-[#009866] hover:bg-gray-700 btn-block border bg-[#009866] text-white" />

                        </form>



                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddService;