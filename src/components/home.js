
import React from 'react';
import DP from '../assets/DP.png';

export default function Home() {

  return (
    <main
      className="container flex flex-col items-center justify-between w-full px-4 mx-auto mt-10 text-gray-800 xl:flex-row xl:justify-evenly">
      <img className="mb-20 rounded-full shadow xl:mb-0 w-80 xl:w-72 xl:h-72 border-[16px] border-violet-1000" src={DP} alt="Shubham" />
      <div className="max-w-3xl xl:pl-8">
        <div className="font-semibold text-violet-700">HELLO THERE,</div>
        <div className="text-6xl font-bold">I'm Shubham</div>
        <p className="mt-4 leading-6">
          I am a UI/UX designer based in Hyderabad, India.
          I was involved in all phases of the design of different domain projects like International <strong>CITI Bank</strong>, a game publisher - <strong>Kathas Entertainment</strong>, <span className='whitespace-nowrap'>an e-commerce -</span>  <strong>Metal-n-Clay</strong>, a gaming youtube channel - <strong>Trident</strong> etc. and successfully executed all projects ensuring 100% client satisfaction.
          <br></br>
          <br></br>


          I am a B.Sc Computer
          Science graduate and later switched to the awesome world of designing
          digital interfaces and products.
        </p>
        <p className="my-4 leading-5">
          I think understanding the human experience is essential for creating
          useful and effective products that make life easier. I enjoy using my
          skill-set to empower people to accomplish their goals.
        </p>
        <p className="leading-5 ">
          I perfectly balance user and business needs to create delightful products.
        </p>
      </div>
    </main>
  )
}