import { Helmet } from "react-helmet-async";
import Navbar from "../Navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Routes/Provider/AuthProvider";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";

const LogIn = () => {
    const { signInUser,googleLogIn } = useContext(AuthContext)


    // navigate
    const navigate=useNavigate()
    const location=useLocation()
    console.log(location);
    



    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        //login
        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire(
                    'Success!',
                    'Your LogIn Successful',
                    'success'
                );
                navigate(location.state ? location.state: "/")
            })
            .catch(error => {
                console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops sorry!!!!!!...',
                    text: (`${error.message}`),
                })
            })
    }


    //Google Login
    const handleGoogleSignIn=()=>{
        googleLogIn()
        .then(result => {
            console.log(result.user);
            Swal.fire(
                'LogIn!',
                'Google LogIn Successful',
                'success'
            )
            navigate(location.state ? location.state: "/")
        })
        .catch(error => {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops sorry...',
                text: (`${error.message}`),
            })
        })
    }

    return (
        <div>
            <Helmet>
                <title>LogIn</title>
            </Helmet>

            <Navbar></Navbar>
            <div className="max-w-7xl mx-auto py-16 md:py-20 lg:py-40 px-10">

                <div className="bg-white max-w-md mx-auto p-10 rounded-lg shadow-2xl bg-gradient-to-r from-red-600 to-orange-900">


                    <h2 className="text-xl md:text-2xl lg:text-3xl text-white text-center font-bold  ">Please Login</h2>
          

                    <form onSubmit={handleLogin} className=" mx-auto">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white  text-[18px]">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-[18px]">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <button className="py-2 md:py-4  border-2 text-white rounded-lg font-bold">LogIn</button>
                        </div>
                    </form>
                   
                    {/* GoogleLogIn */}
                    <div className="flex justify-center mt-6">
                        <button onClick={handleGoogleSignIn} className="py-2 w-full justify-center  bg-transparent  text-white  border-2 rounded-full font-bold flex items-center gap-4"><FcGoogle className="text-2xl"></FcGoogle>Google LogIn</button>
                    </div>
                    <p className="text-[16px] mt-4 text-white font-semibold text-center">Do not Have An Account ? please <Link className="text-red-400 hover:underline" to="/registration">Registration</Link> </p>
                </div>

            </div>
        </div>
    );
};

export default LogIn;