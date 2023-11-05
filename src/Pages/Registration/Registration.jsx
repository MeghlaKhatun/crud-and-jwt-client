import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../Routes/Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import { updateProfile } from 'firebase/auth';

const Registration = () => {

    const navigate=useNavigate()
    const {createUser}=useContext(AuthContext)

    const handleRegistration=e=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const photo=form.photo.value;
        const password = form.password.value;
        console.log(name,email,photo,password);

        //create user
        createUser(email,password)
        .then(result=>{
            console.log(result.user)
            Swal.fire(
                'Success!',
                'Registration Successful',
                'success'
              );
              navigate("/")

              //updateProfile
              updateProfile(result.user,{
                displayName:name,
                photoURL:photo,
              })
              .then(()=>console.log("update"))
              .catch()
        })
        .catch(error=>{
            console.log(error.message);
            Swal.fire({
                icon: 'error',
                title: 'Oops sorry!!!!!!...',
                text: (`${error.message}`),
              })
        })

    }


    return (
        <div>
          <Helmet>
            <title>Registration</title>
          </Helmet>
        
        <Navbar></Navbar>
    <div className="max-w-7xl mx-auto py-16 md:py-20 lg:py-40 px-10">
        
       <div className="bg-white max-w-md mx-auto p-10 rounded-lg shadow-2xl bg-gradient-to-r from-red-600 to-orange-900">
      

        <h2 className="text-xl md:text-2xl lg:text-3xl text-white text-center font-bold  ">Please Registration</h2>

          <form onSubmit={handleRegistration} className=" mx-auto">
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-white  text-[18px]">Name</span>
                </label>
                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
            </div>

            

            <div className="form-control">
                <label className="label">
                    <span className="label-text text-white  text-[18px]">Email</span>
                </label>
                <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text text-white  text-[18px]">Photo URL</span>
                </label>
                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text text-white text-[18px]">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required /> 
            </div>

          <div className="form-control mt-6">
                <button className="py-2 md:py-4  border-2 text-white rounded-lg font-bold">Registration</button>
            </div>
        </form>
        <p className="text-[16px] mt-4 text-white font-semibold text-center">Already Have An Account ? please <Link className="text-red-400 hover:underline" to="/Login">Login</Link> </p>

       </div>

     </div>
  </div>
    
    );
};

export default Registration;