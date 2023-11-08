
import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import Footer from "../Footer/Footer";

const UpdateService = () => {

    const update = useLoaderData();
    const { _id, name, email, image, service_name, area, price, description, profile } = update


    const handleUpdateService = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const image = form.photo.value;
        const service_name = form.serviceName.value;
        const area = form.area.value;
        const price = form.price.value;
        const description = form.description.value;
        const profile = form.profile.value;

        console.log(name, email, image, service_name, area, price, description, profile);
        const updateService = { name, email, image, service_name, area, price, description, profile }
        //send data
        fetch(`https://ass-crud-and-jwt-server.vercel.app/service/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire(
                        'Update!',
                        'Data Updated successful!',
                        'success'
                    )
                }

            })
    }


    return (
        <div>
            <Helmet>
                <title>Home Exchange | Update-Service</title>
            </Helmet>
            <div className="w-full  mb-8 md:mb-10 lg:mb-20 bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/g63nM5M/r-architecture-2g-Dwl-Iim3-Uw-unsplash-1.jpg)', objectFit: "cover" }}>
                <Navbar></Navbar>
                <div className="max-w-5xl text-center text-neutral-content mx-auto items-center ">

                    <div className="">
                        {/* input form */}

                        <form onSubmit={handleUpdateService} className=" w-full py-10 px-10 ">


                            {/* name and email */}
                            <div className="md:flex gap-6 w-full">
                                <div className="form-control pt-2 flex-1">
                                    <label className="label">
                                        <span className="label-text font-semibold text-white text-[16px] md:text-[18px]">Your Name</span>
                                    </label>
                                    <input type="text" name="name" defaultValue={name} readOnly className="input input-bordered text-black" required />
                                </div>

                                <div className="form-control pt-2 flex-1">
                                    <label className="label">
                                        <span className="label-text font-semibold text-white text-[16px] md:text-[18px]">Your Email</span>
                                    </label>
                                    <input type="email" name="email" defaultValue={email} readOnly className="input input-bordered text-black" required />
                                </div>

                            </div>


                            {/* img and service-name */}
                            <div className="md:flex gap-6 w-full">
                                <div className="form-control pt-2 flex-1">
                                    <label className="label">
                                        <span className="label-text font-semibold text-white text-[16px] md:text-[18px]">Photo URL</span>
                                    </label>
                                    <input type="text" name="photo" defaultValue={image} className="input input-bordered text-black" required />
                                </div>

                                <div className="form-control pt-2 flex-1">
                                    <label className="label">
                                        <span className="label-text font-semibold text-white text-[16px] md:text-[18px]">Service Name</span>
                                    </label>
                                    <input type="text" name="serviceName" defaultValue={service_name} className="input input-bordered text-black" required />
                                </div>

                            </div>


                            {/* service-area and service-price */}
                            <div className="md:flex gap-6 w-full">
                                <div className="form-control pt-2 flex-1">
                                    <label className="label">
                                        <span className="label-text font-semibold text-white text-[16px] md:text-[18px]">Service Area</span>
                                    </label>
                                    <input type="text" name="area" defaultValue={area} className="input input-bordered text-black" required />
                                </div>

                                <div className="form-control pt-2 flex-1">
                                    <label className="label">
                                        <span className="label-text font-semibold text-white text-[16px] md:text-[18px]">Service Price</span>
                                    </label>
                                    <input type="text" name="price" defaultValue={price} className="input input-bordered text-black" required />
                                </div>

                            </div>

                            {/* photo url */}
                            <div className="form-control pt-2 ">
                                <label className="label">
                                    <span className="label-text font-semibold text-white text-[16px] md:text-[18px]">Provider Photo URL</span>
                                </label>
                                <input type="text" name="profile" defaultValue={profile} readOnly className="input input-bordered text-black" required />
                            </div>

                            {/* short description */}

                            <div className="mb-8">
                                <div className="form-control pt-2">
                                    <label className="label">
                                        <span className="label-text font-semibold text-white text-[16px] md:text-[18px]">Description</span>
                                    </label>
                                    <textarea name="description" defaultValue={description} cols="35" rows="5" className="border-2 rounded-lg outline-none text-black"></textarea>
                                </div>
                            </div>

                            <input type="submit" value="Update Service" className="py-3 cursor-pointer rounded-full md:font-bold hover:text-[#009866] hover:bg-gray-700 btn-block border bg-[#009866] text-white" />

                        </form>



                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default UpdateService;