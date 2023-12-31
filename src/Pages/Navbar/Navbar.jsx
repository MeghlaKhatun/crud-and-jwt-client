import { NavLink } from "react-router-dom";
import '../Navbar/Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../Routes/Provider/AuthProvider";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext)

    const handleLogOut = () => {
        signOutUser()
            .then()
            .catch
    }


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
                            <div className="flex-1  text-white text-xl font-medium items-end"><a href="/"><span className="text-2xl">H</span>ome  <span className="text-2xl">  S</span>ervices</a></div>
                            
                            <nav className="flex-none hidden lg:block">
                                <ul className=" flex gap-8  menu-horizontal text-white font-bold text-[16px] ">
                                    {/* Navbar menu content here */}
                                    <li className="hover:underline"><NavLink to={"/"}>Home</NavLink></li>
                                    <li className="hover:underline"><NavLink to={"/allService"}>All-Service</NavLink></li>
                                    {

                                        user?.email && <div className="dropdown dropdown-end">
                                            <li tabIndex={0} className="cursor-pointer hover:underline flex items-center">Dashboard<FaAngleDown></FaAngleDown> </li>
                                            <ul tabIndex={0} className="dropdown-content hover:text-black mt-5 z-[1] menu p-2 text-black shadow bg-white  rounded-box w-40">
                                                <li className="hover:underline"><NavLink to={"/addService"}>Add-Service</NavLink></li>
                                                <li className="hover:underline"><NavLink to={"/myServices"}> My-services</NavLink></li>
                                                <li className="hover:underline"><NavLink to={"/mySchedules"}>  My-schedules</NavLink></li>


                                            </ul>
                                        </div>

                                    }

                                    {/* login and logout */}
                                    {
                                        user ?
                                            <div >
                                                <li onClick={handleLogOut} className="hover:underline"><NavLink >LogOut</NavLink></li>
                                            </div>
                                            :
                                            <div>

                                                <li className="hover:underline"><NavLink to={"/login"}>LogIn</NavLink></li>
                                            </div>
                                    }
                                </ul>

                            </nav>

                            {/* profile and name */}
                            <div className="flex flex-col px-2 justify-center overflow-hidden  items-center">

                                <div className="flex justify-center">

                                    {
                                        user?.photoURL && <img src={user.photoURL} className="w-[30px] h-[30px] rounded-full" alt="" />
                                    }
                                </div>

                                <div className="flex justify-center">

                                    {
                                        user?.displayName && <p className="text-white text-[12px] md:text-[14px] lg:text-[16px]">{user.displayName}</p>
                                    }
                                </div>
                            </div>
                        </div>
                        {/* Page content here */}

                    </div>
                    

                    <div className="drawer-side z-10 ">
                        <li htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay "></li>
                        <ul className="menu py-10 px-4 w-80 gap-3 bg-base-200">
                            
                            <li className="hover:underline"><NavLink to={"/"}>Home</NavLink></li>
                                    <li className="hover:underline"><NavLink to={"/allService"}>All-Service</NavLink></li>
                                    {

                                        user?.email && <div className="dropdown dropdown-end">
                                            <label tabIndex={0} className="cursor-pointer hover:underline flex items-center">Dashboard<FaAngleDown></FaAngleDown></label>
                                            <ul tabIndex={0} className="dropdown-content hover:text-black mt-5 z-[1] menu p-2 text-black shadow bg-white  rounded-box w-40">
                                                <li className="hover:underline"><NavLink to={"/addService"}>Add-Service</NavLink></li>
                                                <li className="hover:underline"><NavLink to={"/myServices"}> My-services</NavLink></li>
                                                <li className="hover:underline"><NavLink to={"/mySchedules"}>  My-schedules</NavLink></li>


                                            </ul>
                                        </div>

                                    }
                            {
                                user ?
                                    <div >
                                        <li onClick={handleLogOut} className="hover:underline"><NavLink >LogOut</NavLink></li>
                                    </div>
                                    :
                                    <div>

                                        <li className="hover:underline"><NavLink to={"/login"}>LogIn</NavLink></li>
                                    </div>
                            }

                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;