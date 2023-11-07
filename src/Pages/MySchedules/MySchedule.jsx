
import PropTypes from 'prop-types';

const MySchedule = ({ scheduleCard }) => {
    const { serviceImage, serviceName, instruction,price,date} = scheduleCard
    return (
        <div>
            <div className="card h-[500px] bg-base-100 shadow-2xl">
                <figure className="px-10 pt-10">
                    <img src={serviceImage} />
                </figure>
                <div className="card-body ">
                    <h2 className=" text-xl font-bold">Service: {serviceName}</h2>                   
                    <h2 className="text-[16px] font-bold">Booking Date: {date}</h2>
                    <h2 className="text-[16px]  font-bold">Price: ${price}</h2>
                    <p className=''>{instruction}</p>
                </div>
            </div>
        </div>
    );
};

MySchedule.propTypes = {
    scheduleCard: PropTypes.object,
};

export default MySchedule;