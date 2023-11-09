import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const OtherService = ({ other }) => {
    const {_id, image, service_name, area, description } = other;
    return (
        <div>

            <div className=" h-[550px] bg-base-100  shadow-[#009866] shadow-md hover:scale-105 duration-300">
                <div className='h-1/2  shadow-2xl rounded-b-full rounded-t-lg '>
                    <img className='rounded-b-full h-full w-full rounded-t-lg' src={image} />
                </div>

                <div className="card-body">
                    <h2 className="card-title font-bold italic">{service_name}</h2>
                    <p className='text-[18px] text-gray-600 italic'>{area}</p>
                    {
                        description.length > 100 ? <p className='font-semibold italic'>{description.slice(0, 100)}.........</p> : <p className='font-semibold italic'>{description}</p>
                    }
                    <div className="card-actions justify-center">
                        <Link to={`/singleService/${_id}`} className=" bg-[#009866] border-none text-white py-3 px-5 font-semibold rounded-full">View Details</Link >
                    </div>
                </div>
            </div>

        </div>
    );
};

OtherService.propTypes = {
    other: PropTypes.object,
};

export default OtherService;