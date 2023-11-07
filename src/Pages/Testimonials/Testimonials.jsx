import './testimonial.css';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const Testimonials = () => {
    return (
        <div className='my-10'>
            <h2 className="text-center text-[#215946] text-2xl italic md:text-3xl lg:text-5xl  font-bold mb-4">Our Testimonials</h2>
            <p className='text-[16px] font-semibold w-full px-4 md:px-0 md:w-1/2 text-center mx-auto mt-2 mb-8'>A testimonial is a statement from a past customer that describes how a product or service helped them. Testimonials are often written by the business based on specific questions they ask satisfied customers. </p>
            <div className="max-w-7xl mx-auto mt-28 lg:mt-32">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10 lg:px-0 gap-y-20'>

                    {/* first card */}
                    <div className="cart">
                        <div className="imgbox">
                            <img className='img' src="https://i.ibb.co/m8Tckpy/test-1-1.jpg" alt="" />
                        </div>
                        <div className="content">
                            <div className='flex justify-center'>
                                <Stack spacing={1}>
                                    <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                                </Stack>
                            </div>
                            <p>I was initially hesitant about the idea of home swapping, but this platform made it a breeze. The website is user-friendly, and the support team was responsive to our questions.</p>
                        </div>
                    </div>
                    {/* second card */}
                    <div className="cart">
                        <div className="imgbox">
                            <img className='img' src="https://i.ibb.co/zJpM5dY/test-2-1.jpg" alt="" />
                        </div>
                        <div className="content">
                            <div className='flex justify-center'>
                                <Stack spacing={1}>
                                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                </Stack>
                            </div>
                            <p>I was initially hesitant about the idea of home swapping, but this platform made it a breeze. The website is user-friendly, and the support team was responsive to our questions.</p>
                        </div>
                    </div>
                    {/* third card */}
                    <div className="cart">
                        <div className="imgbox">
                            <img className='img' src="https://i.ibb.co/Qd3GDLD/test-3-1.jpg" alt="" />
                        </div>
                        <div className="content">
                            <div className='flex justify-center'>
                                <Stack spacing={1}>
                                    <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
                                </Stack>
                            </div>
                            <p>I was initially hesitant about the idea of home swapping, but this platform made it a breeze. The website is user-friendly, and the support team was responsive to our questions.</p>
                        </div>
                    </div>
                    {/* fourth card */}
                    <div className="cart">
                        <div className="imgbox">
                            <img className='img' src="https://i.ibb.co/RNGtzwD/test-4-1.jpg" alt="" />
                        </div>
                        <div className="content">
                            <div className='flex justify-center'>
                                <Stack spacing={1}>
                                    <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                                </Stack>
                            </div>
                            <p>I was initially hesitant about the idea of home swapping, but this platform made it a breeze. The website is user-friendly, and the support team was responsive to our questions.</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Testimonials;