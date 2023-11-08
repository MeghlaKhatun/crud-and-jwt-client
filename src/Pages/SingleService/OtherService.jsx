import PropTypes from 'prop-types';

const OtherService = ({other}) => {
    const { name, image, service_name, area, price, description,profile } = other;
    return (
        <div>

            <div className="card h-[600px] bg-base-100 shadow-xl">
                <div className='h-2/5'>
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
                    <div className="flex justify-between">
                        <h2 className="card-title font-bold italic">{service_name}</h2>
                        <h2 className="font-semibold md:font-bold text-[16px] bg-gray-600 py-1 px-4 rounded-full text-white italic">${price}</h2>
                    </div>
                    <p className='text-[18px] text-gray-600 italic'>Area: {area}</p>
                    <p className='font-semibold italic'>{description}</p>
                </div>
            </div>

        </div>
    );
};

OtherService.propTypes = {
    other:PropTypes.object,
};

export default OtherService;