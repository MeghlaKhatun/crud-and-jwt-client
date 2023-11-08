import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MyPending = ({ pendingCard }) => {
    const { serviceImage, serviceName, user, price } = pendingCard;
    return (
        <div>
            <div className="h-[500px] bg-base-100 shadow-2xl">
                <figure className="">
                    <img src={serviceImage} />
                </figure>
                <div className="card-body ">
                    <h2 className=" text-xl font-bold">Service: {serviceName}</h2>
                    <h2 className="text-[16px] font-bold"> User: {user}</h2>
                    <h2 className="text-[16px]  font-bold">Price: ${price}</h2>
                </div>

                <div className="dropdown dropdown-top">
                    <label tabIndex={0} className="bg-[#009866] ml-5 text-white py-2 px-4">Click</label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li ><Link>Pending</Link></li>
                        <li><Link>In Progress</Link></li>
                        <li><Link>Completed</Link></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

MyPending.propTypes = {
    pendingCard: PropTypes.object,
};

export default MyPending;

