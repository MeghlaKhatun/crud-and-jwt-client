import { useContext, useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../../Routes/Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import MyService from "./MyService";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const MyServices = () => {

    
    const { user } = useContext(AuthContext)
    const email=user.email;

    const allMyCards= useLoaderData();
    const [myCards, setMyCards] = useState([])
    
    // console.log(allMyCards)

    useEffect(() => {
        const serviceFilter = allMyCards?.filter(myCard => myCard.email == user.email);
        setMyCards(serviceFilter)
        console.log(serviceFilter)

    }, [allMyCards,user.email])


    const handleDelete = (_id) => {
        console.log(_id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {

            const info={_id,email}

            if (result.isConfirmed) {
                fetch(`http://localhost:5000/service`, {
                    method: 'DELETE',
                    headers:{
                        "content-type":"application/json"
                    },
                    body:JSON.stringify(info)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            
                                fetch("http://localhost:5000/service")
                                .then(res=>res.json())
                                .then(data=>{
                                    console.log(data)
                                    const filtered = data.filter(myCart => user.email == myCart.email);
                                    setMyCards(filtered)
                                })
         

                        }

                    })
            }
        })

    }



    return (
        <div>
            <Helmet>
                <title>
                    Home Exchange | My-Services
                </title>
            </Helmet>
            <Navbar></Navbar>

            <h2 className="text-center text-[#215946] text-2xl italic md:text-3xl lg:text-5xl  font-bold  my-4">My Service</h2>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 px-10 lg:px-0">
                    
                    {
                        myCards?.map(card=><MyService key={card._id} card={card} handleDelete={handleDelete}></MyService>)
                    }
                </div>


            <Footer></Footer>
        </div>
    );
};

export default MyServices;