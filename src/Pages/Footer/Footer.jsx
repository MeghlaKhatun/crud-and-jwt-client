import { FaTwitter, FaYoutube, FaFacebook,FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
    return (
        <div>

            <footer className=" bg-gray-700 ">
                <div className="max-w-7xl mx-auto justify-center md:justify-between lg:justify-evenly footer p-10 text-base-content">
                    <nav className="flex flex-col items-center justify-center">
                        <img className="h-[60px] w-[60px] md:h-[100px] md:w-[100px]" src="https://i.ibb.co/cwWsXtm/logo-home-png-7425.png" alt="" />
                        <h2 className="text-white font-semibold text-xl justify-center">Home Services</h2>
                    </nav>
                  
                    <nav>
                        <header className="footer-title text-white text-[18px] md:text-xl">Contact</header>
                        <a className="link link-hover text-white md:text-[16px]">Phone: +8801484750543</a>
                        <a className="link link-hover text-white md:text-[16px]">Email: parvin45@gmail.com</a>
                        <a className="link link-hover text-white md:text-[16px]">Address: Mirpur-12,Dhaka</a>
                    </nav>
                    <nav>
                        <header className="footer-title text-white text-[18px] md:text-xl">Social</header>
                        <div className="grid grid-flow-col gap-4">
                            <a href="#" className="text-2xl text-white"><FaTwitter></FaTwitter></a>
                            <a href="#" className="text-2xl text-white"><FaYoutube></FaYoutube></a>
                            <a href="#" className="text-2xl text-white"><FaFacebook></FaFacebook></a>
                            <a href="#" className="text-2xl text-white"><FaLinkedinIn></FaLinkedinIn></a>
                        </div>
                    </nav>

                </div>

                <p className="bg-black bg-opacity-50 text-[16px] text-white text-center p-6">© Copyright 2023 All Right Reserved </p>
            </footer>

        </div>
    );
};

export default Footer;