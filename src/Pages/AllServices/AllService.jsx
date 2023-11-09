import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AllService = ({ card }) => {
    const { _id, image, profile, name, service_name, price, area, description } = card;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className='h-2/5 md:h-3/5'>
                <img className='rounded-lg h-full w-full' src={image} alt="Shoes" />
            </div>

            <div className="card-body">
                <div className='flex gap-3 items-center'>
                    <div>
                        <img src={profile} className="w-[30px] h-[30px] rounded-full" alt="" />
                    </div>
                    <div>
                        <h4 className='font-semibold text-[18px] italic'>{name}</h4>
                    </div>

                </div>
                <div className="flex justify-between items-center">
                    <h2 className="card-title font-bold italic">{service_name}</h2>
                    <h2 className="font-semibold md:font-bold text-[16px] bg-gray-600 py-1 px-4 rounded-full text-white italic">${price}</h2>
                </div>
                <p className='text-[18px] text-gray-600 italic'>Area: {area}</p>

                {
                    description.length > 100 ? <p className='font-semibold italic'>{description.slice(0, 100)}.........</p> : <p className='font-semibold italic'>{description}</p>
                }

                <div className="card-actions justify-center">
                    <Link to={`/singleService/${_id}`} className=" bg-[#009866] border-none text-white py-3 px-5 font-semibold rounded-full">View Details</Link>
                </div>
            </div>
        </div>
    );
};

AllService.propTypes = {
    card: PropTypes.object,
};

export default AllService;