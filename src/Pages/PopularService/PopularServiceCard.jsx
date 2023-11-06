import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../Routes/Provider/AuthProvider';

const PopularServiceCard = ({ service }) => {
    const { user } = useContext(AuthContext)
    const { name, image, service_name, area, price, description } = service;
    return (
        <div>

            <div className="card h-[600px] bg-base-100 shadow-xl">
                <div className='h-2/5'>
                    <img className='rounded-lg h-full w-full' src={image} alt="Shoes" />
                </div>

                <div className="card-body">
                    <div className='flex gap-3 items-center'>
                        <div>
                            <img src={user.photoURL} className="w-[40px] h-[40px] rounded-full" alt="" />
                        </div>
                        <div>
                            <h4 className='font-semibold text-[18px] italic'>{name}</h4>
                        </div>

                    </div>
                    <div className="flex justify-between">
                        <h2 className="card-title font-bold italic">{service_name}</h2>
                        <h2 className="font-semibold md:font-bold text-[16px] bg-gray-600 py-1 px-4 rounded-full text-white italic">${price}</h2>
                    </div>
                    <p className='text-[18px] text-gray-600'>Area: {area}</p>
                    <p className='font-semibold italic'>{description}</p>
                    <div className="card-actions justify-center">
                        <button className=" bg-[#009866] border-none text-white py-3 px-5 font-semibold rounded-full">View Details</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

PopularServiceCard.propTypes = {
    service: PropTypes.object,
}

export default PopularServiceCard

