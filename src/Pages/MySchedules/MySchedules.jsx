import { Helmet } from "react-helmet-async";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Routes/Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import MySchedule from "./MySchedule";
import MyPending from "./MyPending";

const MySchedules = () => {

    const { user } = useContext(AuthContext)
    const mySchedules = useLoaderData();
    const [schedules, setSchedules] = useState([]);
    console.log("schedule", schedules)

    const [pending, setPending] = useState([])
    // console.log("hello pending", pending);

    useEffect(() => {
        const bookingFilter = mySchedules?.filter(cart => cart.user == user.email);
        setSchedules(bookingFilter)

        const bookingFilter2 = mySchedules?.filter(cart => cart.proEmail == user.email);
        setPending(bookingFilter2)

    }, [mySchedules, user.email])

    return (
        <div>
            <Helmet>
                <title>
                    Home Exchange | My-Schedules
                </title>
            </Helmet>
            <Navbar></Navbar>
            <div>
                <h2 className="text-center text-[#215946] text-2xl italic md:text-3xl lg:text-5xl  font-bold  my-4">My Bookings</h2>

                <div>

                    {
                        schedules.length == 0 ? <p className="text-center font-bold text-2xl">No data found</p> : <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 px-10 lg:px-0">{
                            schedules?.map(scheduleCard => <MySchedule key={scheduleCard._id} scheduleCard={scheduleCard}></MySchedule>)
                        }</div>
                    }

                </div>
            </div>

            {/* My Pending works   */}
            <div>
                <h2 className="text-center text-[#215946] text-2xl italic md:text-3xl lg:text-5xl  font-bold  my-4">My Pending works </h2>
                <div>

                    {
                        pending.length == 0 ? <p className="text-center font-bold text-2xl">No data found</p> : <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 px-10 lg:px-0">{
                            pending?.map(pendingCard=><MyPending key={pendingCard._id} pendingCard={pendingCard}></MyPending>)
                        }</div>
                    }

                </div>

            </div>

            <Footer></Footer>
        </div>
    );
};

export default MySchedules;