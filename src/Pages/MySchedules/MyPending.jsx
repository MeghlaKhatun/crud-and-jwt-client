import PropTypes from 'prop-types';
import { useState } from 'react';

const MyPending = ({ pendingCard }) => {
    const { serviceImage, serviceName, user, price } = pendingCard;

    // Initialize the status state with the initial value "pending"
    const [status, setStatus] = useState("pending");

    // Function to handle status change
    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    };

    return (
        <div>
            <div className="h-[500px] bg-base-100 shadow-2xl">
                <figure className="">
                    <img src={serviceImage} alt={serviceName} />
                </figure>
                <div className="card-body">
                    <h2 className="text-xl font-bold">Service: {serviceName}</h2>
                    <h2 className="text-[16px] font-bold">User: {user}</h2>
                    <h2 className="text-[16px] font-bold">Price: ${price}</h2>
                </div>

                <div className="pendingArea ml-6 border-2 inline-block">
                    <select value={status} onChange={handleStatusChange}>
                        <option value="pending">Pending</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>

                {/* Display the current status */}
                <p className='ml-6 text-black font-bold'>Status: {status}</p>
            </div>
        </div>
    );
};

MyPending.propTypes = {
    pendingCard: PropTypes.object,
};

export default MyPending;
