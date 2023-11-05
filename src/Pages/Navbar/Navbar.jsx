import { NavLink } from "react-router-dom";
import '../Navbar/Navbar.css'

const Navbar = () => {
    return (
        <div className="bg-black bg-opacity-50">
            <div className="max-w-7xl mx-auto  py-8">

                <div className="drawer">
                    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col">
                        {/* Navbar */}
                        <div className="w-full navbar">
                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block text-white w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                            <img className="h-[60px] w-[60px] rounded-full" src="https://i.ibb.co/cwWsXtm/logo-home-png-7425.png" alt="" />
                            <div className="flex-1  text-white text-xl font-medium ">Home Exchange</div>

                            <nav className="flex-none hidden lg:block">
                                <ul className=" flex gap-8  menu-horizontal text-white font-bold text-[16px] ">
                                    {/* Navbar menu content here */}
                                    <li className="hover:underline"><NavLink to={"/"}>Home</NavLink></li>
                                    <li  className="hover:underline"><NavLink to={"/service"}>Service</NavLink></li>
                                    <li  className="hover:underline"><NavLink to={"/registration"}>Registration</NavLink></li>
                                    <li  className="hover:underline"><NavLink to={"/login"}>Login</NavLink></li>
                                </ul>
                            </nav>
                        </div>
                        {/* Page content here */}

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay "></label>
                        <ul className="menu p-4 w-80 min-h-full bg-base-200">
                            <li><NavLink to={"/"}>Home</NavLink></li>
                            <li><NavLink to={"/service"}>Service</NavLink></li>
                            <li><NavLink to={"/registration"}>Registration</NavLink></li>
                            <li><NavLink to={"/login"}>Login</NavLink></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div> 
    );
};

export default Navbar;