// import React, { useState } from 'react';
// import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
// import {MdOutlineHealthAndSafety} from 'react-icons/md';
// import {BspersonFillCart,BsPerson} from 'react-icons/bs';
// import { Link } from 'react-router-dom';

// const TopNav = () => {
//   const [sideNav,setSideNav]=useState(false)
//   console.log(sideNav)
//   return (
//     <div className='max-w-[1520] mx-auto flex justify-between items-center p-2 sticky top-0 bg-white shadow-md ' style={{zIndex:'10'}}>
//       <div className='flex items-center space-x-4'>
//         <div onClick={()=>setSideNav(!sideNav)} className='cursor-pointer'>
//           <AiOutlineMenu size={25} />
//         </div>
//         <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
//           Fitness 
//           <span className='font-bold'>Trainer</span>
//         </h1>
//         <div className='hidden lg:flex items-center space-x-2 bg-gray-200 rounded-full p-1 text-[14px]'>
//           <p className='bg-cyan-700 text-white rounded-full p-2 font-bold'>head1</p>
//           <p className='p-2 font-bold'>head2</p>
//         </div>
//       </div>
//       <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] space-x-2'>
//         <AiOutlineSearch size={25} />
//         <input className='bg-transparent p-2 w-full focus:outline-none'
//           type='text'
//           placeholder='search'
//         />
//       </div>
//       <button className='bg-cyan-700 text-white hidden md:flex items-center py-2 px-4 rounded-full'>head 3
//       <MdOutlineHealthAndSafety size={20}/>
//       </button>
//       {
//         sideNav ? (
//         <div className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0'
//         onClick={()=>setSideNav(!sideNav)}></div>
//         ):(
//           ""
//         )}

//       <div className={
//         sideNav 
//         ?'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-200'
//         : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-200'
//          }
//          >
//           <AiOutlineClose onClick={()=>setSideNav(!sideNav)} size={25}
//           className='absolute  right-4 top-4 cursor-pointer'
//           />
//           <h2 className='text-2xl p-4 '>head 4 <span className='text-cyan-700' font--bold>head 5</span></h2>
//           <nav>
//     <ul className='flex flex-col p-4 text-gray-900'>
//     <li className='text-xl py-4 flex'>
//             <BsPerson size={25} className="mr-4 text-white bg-black rounded-full cursor-pointer" />
//             <Link to="/" className="cursor-pointer">Home</Link>
//         </li>
//         <li className='text-xl py-4 flex'>
//             <BsPerson size={25} className="mr-4 text-white bg-black rounded-full cursor-pointer" />
//             <Link to="/personal" className="cursor-pointer">Personal details</Link>
//         </li>
//         <li className='text-xl py-4 flex'>
//             <BsPerson size={25} className="mr-4 text-white bg-black rounded-full cursor-pointer" />
//             <Link to="/Hospital" className="cursor-pointer">Find Hospital</Link>
//         </li>
//         <li className='text-xl py-4 flex'>
//             <BsPerson size={25} className="mr-4 text-white bg-black rounded-full cursor-pointer" />
//             <Link to="/Disease" className="cursor-pointer">Disease Detector</Link>
//         </li>
//         <li className='text-xl py-4 flex'>
//             <BsPerson size={25} className="mr-4 text-white bg-black rounded-full cursor-pointer" />
//             <Link to="/Contact" className="cursor-pointer">Contact us</Link>
//         </li>
//     </ul>
// </nav>
//           </div>
      
//     </div>
//   )
// }

// export default TopNav;



import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const TopNav = () => {
  const [sideNav, setSideNav] = useState(false);

  return (
    <div className='max-w-[1520] mx-auto flex justify-between items-center p-2 sticky top-0 bg-white shadow-md ' style={{ zIndex: '10' }}>
      <div className='flex items-center space-x-4'>
        <div onClick={() => setSideNav(!sideNav)} className='cursor-pointer'>
          <AiOutlineMenu size={25} />
        </div>
        <Link to="/">
          <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
            Med
            <span className='font-bold'>AI</span>
            CARE
          </h1>
        </Link>
        
      </div>
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] space-x-2'>
        <AiOutlineSearch size={25} />
        <input className='bg-transparent p-2 w-full focus:outline-none'
          type='text'
          placeholder='search'
        />
      </div>
      <Link to='/register'>
        <button className='bg-cyan-700 text-white hidden md:flex items-center py-2  rounded-full'>Join Now
          <MdOutlineHealthAndSafety size={20} />
        </button>
      </Link>
      
      {/* Login Button */}
      <Link to="/login">
        <button className='bg-cyan-700 text-white hidden md:flex items-center py-2 px-4 rounded-full'>
          Login
          <BsPerson size={20} className="ml-2" />
        </button>
      </Link>
      {sideNav ? (
        <div className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0'
          onClick={() => setSideNav(!sideNav)}></div>
      ) : (
        ""
      )}

      <div className={
        sideNav
          ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-200'
          : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-200'
      }
      >
        <AiOutlineClose onClick={() => setSideNav(!sideNav)} size={25}
          className='absolute  right-4 top-4 cursor-pointer'
        />
        <h2 className='text-2xl p-4 '><span className='text-cyan-700 font-bold'>MedAICare</span></h2>
        <nav>
          <ul className='flex flex-col p-4 text-gray-900'>
            <li className='text-xl py-4 flex'>
              <BsPerson size={25} className="mr-4 text-white bg-black rounded-full cursor-pointer" />
              <Link to="/" className="cursor-pointer">Home</Link>
            </li>
            <li className='text-xl py-4 flex'>
              <BsPerson size={25} className="mr-4 text-white bg-black rounded-full cursor-pointer" />
              <Link to="/Hospital" className="cursor-pointer">Find Hospital</Link>
            </li>
            <li className='text-xl py-4 flex'>
              <BsPerson size={25} className="mr-4 text-white bg-black rounded-full cursor-pointer" />
              <Link to="/Disease" className="cursor-pointer">Disease Detector</Link>
            </li>
            <li className='text-xl py-4 flex'>
              <BsPerson size={25} className="mr-4 text-white bg-black rounded-full cursor-pointer" />
              <Link to="/personal" className="cursor-pointer">Health Chatbot</Link>
            </li>
            <li className='text-xl py-4 flex'>
              <BsPerson size={25} className="mr-4 text-white bg-black rounded-full cursor-pointer" />
              <Link to="/Contact" className="cursor-pointer">Contact us</Link>
            </li>
          </ul>
        </nav>
      </div>

    </div>
  )
}

export default TopNav;
