import { Helmet } from "react-helmet-async";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Routes/Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import MySchedule from "./MySchedule";

const MySchedules = () => {


    const { user } = useContext(AuthContext)

    const mySchedules= useLoaderData();
    const [schedules, setSchedules] = useState([]);
    
    // console.log(mySchedules)

    useEffect(() => {
        const bookingFilter = mySchedules?.filter(cart => cart.user == user.email);
        setSchedules(bookingFilter)
        console.log(bookingFilter)

    }, [mySchedules,user.email])

    return (
        <div>
            <Helmet>
                <title>
                    Home Exchange | My-Schedules
                </title>
            </Helmet>
            <Navbar></Navbar>
            <h2 className="text-center text-[#215946] text-2xl italic md:text-3xl lg:text-5xl  font-bold  my-4">My Bookings</h2>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 px-10 lg:px-0">
                    
                    {
                        schedules?.map(scheduleCard=><MySchedule key={scheduleCard._id} scheduleCard={scheduleCard}></MySchedule>)
                    }
                    
                </div>

            <Footer></Footer>
        </div>
    );
};

export default MySchedules;