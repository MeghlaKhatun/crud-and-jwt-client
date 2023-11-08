

const ContactUs = () => {
    return (
        <div className="my-10 px-10 lg:px-0">
            <h2 className="text-center text-[#215946] text-2xl italic md:text-3xl lg:text-5xl  font-bold my-4">Contact Us</h2>

            <div className="max-w-7xl mx-auto">
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <input type="text" placeholder="Your Name" className="py-3 pl-3 border-2 border-gray-600 outline-none" required />
                        <input type="text" placeholder="Email Address" className="py-3 pl-3 border-2 border-gray-600 outline-none" required />
                        <input type="text" placeholder="Subject" className="py-3 pl-3 border-2 border-gray-600 outline-none" required />
                    </div>
                    <div>
                        <textarea placeholder="Message" className="w-full py-3 pl-3 border-2 border-gray-600 outline-none mt-4" id="" cols="30" rows="10" required></textarea>
                    </div>
                    <div className="flex justify-center md:justify-start mt-4">
                        <input value="Submit" className="bg-[#009866] border-none text-white py-2 outline-none md:py-3 px-4 text-center md:px-5 font-semibold cursor-pointer"/>
                    </div>
                </form>
            </div>


        </div>
    );
};

export default ContactUs;