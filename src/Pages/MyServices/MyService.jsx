import PropTypes from 'prop-types';
import { FaTrash,FaPen } from "react-icons/fa";

const MyService = ({ card,handleDelete }) => {

    
    const {_id,  image, service_name, price, description, } = card;


    
    
    



    return (
        <div>


            <div className="card h-[550px]  glass">
                <div className='h-2/5'>
                    <img className='rounded-lg h-full w-full' src={image} alt="car!" />
                </div>
                <div className="card-body">
                    <h2 className="text-xl font-bold">Service: {service_name}</h2>
                    <h2 className="text-[18px] font-semibold">Price: ${price}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-center">
                        <button className="bg-[#009866] border-none text-white py-3 px-5 font-semibold rounded-lg flex items-center gap-1 justify-center"><FaPen></FaPen> Edit</button>
                        <button onClick={()=>handleDelete(_id)}  className="bg-red-900 border-none text-white py-3 px-5 font-semibold rounded-lg flex items-center gap-1 justify-center "><FaTrash></FaTrash> Delete</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

MyService.propTypes = {
    card: PropTypes.object,
    handleDelete:PropTypes.func
};

export default MyService;