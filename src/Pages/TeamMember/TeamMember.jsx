import Carousel from 'react-elastic-carousel'

const TeamMember = () => {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ]

  return (
    <div>
      <div className='max-w-7xl mx-auto my-4 md:my-8 lg:my-12'>
        <h2 className='text-center text-[#215946] text-2xl italic md:text-3xl lg:text-5xl  font-bold'>Our Team Member</h2>
        <p className='text-[16px] font-semibold w-full px-4 md:px-0 md:w-1/2 text-center mx-auto mt-2 mb-4'>The team members responsibilities include handling all tasks assigned by the team leader or manager, working synergistically with other team members, complying with company regulations, and being a good brand ambassador at all times.</p>


        <Carousel breakPoints={breakPoints}>
          <div className="card w-72 lg:w-96 h-96 bg-base-100 shadow-xl image-full">
            <figure><img src="https://i.ibb.co/kKDRd0R/team-1-1.jpg" /></figure>          
          </div>

          <div className="card  w-72 lg:w-96 h-96 bg-base-100 shadow-xl image-full">
            <figure><img src="https://i.ibb.co/cTd97GP/team-2-1.jpg"/></figure>
          </div>

          <div className="card  w-72 lg:w-96 h-96 bg-base-100 shadow-xl image-full">
            <figure><img src="https://i.ibb.co/m6L1tZz/team-3-1.jpg" /></figure>
          </div>

          <div className="card  w-72 lg:w-96 h-96 bg-base-100 shadow-xl image-full">
            <figure><img src="https://i.ibb.co/X8MFPND/team-4-1.jpg"  /></figure>
          </div>

          <div className="card  w-72 lg:w-96 h-96 bg-base-100 shadow-xl image-full">
            <figure><img src="https://i.ibb.co/r3s4Z2B/team-5-1.jpg" /></figure>
          </div>

          <div className="card  w-72 lg:w-96 h-96 bg-base-100 shadow-xl image-full">
            <figure><img src="https://i.ibb.co/H2J9zYg/team-6-1.jpg"  /></figure>
          </div>

          <div className="card  w-72 lg:w-96 h-96 bg-base-100 shadow-xl image-full">
            <figure><img src="https://i.ibb.co/C7W4sT7/team-7-1.jpg" /></figure>
          </div>


        </Carousel>
      </div>
    </div>
  );
};

export default TeamMember;