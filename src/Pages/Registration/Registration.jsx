import { Link } from 'react-router-dom';
import '../Registration/Registration.css'

const Registration = () => {
    return (
        <div className='flex h-[100vh] justify-center items-center'>
            <div className="box h-[600px]">
                <span className="borderLine"></span>
                <form >
                    <h2 className='text-white font-bold text-xl text-center'>Please Registration</h2>
                    <div className="inputBox">
                        <input type="text" required id=""></input>
                        <span>Username</span>
                        <i></i>
                    </div>
                    <div className="inputBox">
                        <input type="text" required id=""></input>
                        <span>Email</span>
                        <i></i>
                    </div>
                    <div className="inputBox">
                        <input type="text" required id=""></input>
                        <span>Photo URL</span>
                        <i></i>
                    </div>
                    <div className="inputBox">
                        <input type="password" required id=""></input>
                        <span>Password</span>
                        <i></i>
                    </div>
                    <input className='w-full text-white py-3 mt-3 rounded-lg border' type="submit" value="Registration"></input>
                    <div>
                        <p>Already Have An Account ? please <Link>Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;