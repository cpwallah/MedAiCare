// import React from 'react';
// import Typed from 'react-typed';
// import banner_2 from '../images/banner_2.jpg';
// import bgimg from '../images/peakpx.jpg';
// import "../styles/featuredstyle.css";
// import { Link } from 'react-scroll';

// const Featured = () => {
//   const scrollToSection = () => {
//     const section  = document.getElementById('ourServices');
//     section.scrollIntoView({ behavior: 'smooth' });
//   };
//   return (
//     <div className='featuredstyle flex flex-row-reverse ' >
//        <div className='bg flex' style={{ overflowY: 'hidden' }}>
//       {/* <img src={bgimg} /> */}
//       </div>
//       <div className='max-w-[1520px] mt-[-96] w-full py-10 h-screen mx-auto text-center flex flex-col'>
//         <p className='text-xl text-cyan-300 font-bold p-2'>Growing with Fitness Trainer</p>
//         <h1 className='md:text-5xl sm:text-4xl text-4xl font-bold md:py-3 text-white'>AI Fitness Trainer</h1>
//         <div className='flex justify-center items-center'>
//           <p className='md:text-3xl sm:text-2xl text-xl font-bold py-2 text-white'>
//             Fast, Flexible workout for
//           </p>
//           <Typed className='md:text-3xl sm:text-2xl text-xl md:pl-4 font-bold pl-2 text-cyan-300' strings={['Kids', 'Men', 'Women']} typeSpeed={100} backSpeed={100} loop />
//         </div>
//         <p className='md:text-2xl sm:text-xl text-xl py-0 font-bold text-white'>Lorem ipsum is placeholder text commonly used in</p>
//         <div className='text-center mt-40'>
         
//         <Link
//           to="ourServices"
//           spy={true}
//           smooth={true}
//           offset={-70}
//           duration={900}
//         >
//           <button 
//             className='bg-green-400 w-[200px] rounded-full font-medium py-3 text-black hover:shadow-xl hover:bg-green-600 outline-none focus:outline-none'>
//             Get Started
//           </button>
//         </Link>
//         </div>
//       </div>
//     </div>
//   )
// }
// export default Featured;


import React from 'react';
// import banner_2 from '../images/banner_2.jpg';
// import bgimg from '../images/peakpx.jpg';
import "../styles/featuredstyle.css";
import { Link } from 'react-scroll';

const Featured = () => {
  // const scrollToSection = () => {
  //   const section  = document.getElementById('ourServices');
  //   section.scrollIntoView({ behavior: 'smooth' });
  // };
  return (
    <div className='featuredstyle flex flex-row-reverse '>
       <div className='bg flex' style={{ overflowY: 'hidden' }}>
      {/* <img src={bgimg} /> */}
      </div>
      <div className='max-w-[1520px] mt-[-96] w-full py-10 h-screen mx-auto text-center flex flex-col'>
        <p className='text-xl text-cyan-300 font-bold p-2'>Live Healthy with Medical AI</p>
        <h1 className='md:text-5xl sm:text-4xl text-4xl font-bold md:py-3 text-white'>MED AI CARE</h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-3xl sm:text-2xl text-xl font-bold py-2 text-white'>
            Fast, Flexible Health Serviecs for
          </p>
          <p className='md:text-3xl sm:text-2xl text-xl md:pl-4 font-bold pl-2 text-cyan-300'>
            Everyone
          </p>
        </div>
        {/* <p className='md:text-2xl sm:text-xl text-xl py-0 font-bold text-white'>Lorem ipsum is placeholder text commonly used in</p> */}
        <div className='text-center mt-40'>
          <Link
            to="ourServices"
            spy={true}
            smooth={true}
            offset={-70}
            duration={900}
          >
            <button 
              className='bg-green-400 w-[200px] rounded-full font-medium py-3 text-black hover:shadow-xl hover:bg-green-600 outline-none focus:outline-none'>
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Featured;
