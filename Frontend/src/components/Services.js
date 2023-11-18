import React from 'react';
import bgimg from '../images/hospital.jpg';
import brainimg from '../images/tumor.jpg'
import chatbot from '../images/chatbotimg.jpg'
import "../styles/aim.css";
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id="ourServices">
      <h1  className='px-4 text-center my-20 mt-0 text-4xl md:text-5xl sm:text-4xl  font-bold md:py-3 text-cyan-700'>OUR SERVICES</h1>
      <div className='bg-gray'>
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
          <div className='bgm'>
            <img src={bgimg} alt="" />
          </div>
          <div className='md:w-4/5 mx-[20px]'>
            <h2 className='text-4xl text-neutral-500 md:w-full'>Find Nearby Hospital</h2>
            <p className='md:w-full txt-sm text-neutral-400 mb-8'>LoremLorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem Ipsum Generator. More questionsReference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
            <Link to ="https://www.google.com/maps/search/find+nearby+hospitals/@28.5834766,77.0113533,12z/data=!3m1!4b1?authuser=0&entry=ttu">
            <button className='bg-green-400 w-32 md:w-[200px] rounded-full font-medium py-3 text-black hover:shadow-xl hover:bg-green-600 outline-none focus:outline-none'>Find Hospital</button></Link>
          </div>
        </div>
      </div>

      <div className='bg-blue'>
  <div className='md:w-11/12 mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-12 my-20'>
    <div className='md:w-4/5 mx-[20px]'>
      <h2 className='text-4xl text-neutral-500 md:w-full'>Detect Disease</h2>
      <p className='md:w-full txt-sm text-neutral-400 mb-8'>LoremLorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem Ipsum Generator. More questionsReference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
      <Link to ="/Disease">
      <button className='bg-green-400 w-32 md:w-[200px] rounded-full font-medium py-3 text-black hover:shadow-xl hover:bg-green-600 outline-none focus:outline-none'>Disease Detector</button></Link>
    </div>
    <div className='bgm flex-col md:flex-col'>
      <img src={brainimg} alt="DESCRIBE_IMAGE_HERE" />
    </div>
  </div>
</div>
<div className='bg-gray'>
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12 my-20'>
          <div className='bgm'>
            <img src={chatbot} alt="" />
          </div>
          <div className='md:w-4/5 mx-[20px]'>
            <h2 className='text-4xl text-neutral-500 md:w-full'>Talk to ChatBot</h2>
            <p className='md:w-full txt-sm text-neutral-400 mb-8'>LoremLorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem Ipsum Generator. More questionsReference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
            <Link to ="/chatbot">
            <button className='bg-green-400 w-32 md:w-[200px] rounded-full font-medium py-3 text-black hover:shadow-xl hover:bg-green-600 outline-none focus:outline-none'>Let's Chat</button></Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Services;
