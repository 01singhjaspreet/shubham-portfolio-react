
import React from 'react';
import { Link } from 'react-router-dom';
import Kathas from '../assets/thumbnails/Kathas.png';
import KathasE from '../assets/thumbnails/webkaths-thumbnail.png';
import MetalnClay from '../assets/thumbnails/MetalnClay.png';
import Trident from '../assets/thumbnails/Trident.png';
import Nasta from '../assets/thumbnails/nasta.png';

export default function Work() {

  return (
    <main className="container grid grid-cols-12 gap-5 px-4 mx-auto mt-12">
      <div className="flex justify-center w-full col-span-12 sm:col-span-6 xl:col-span-4">
        <Link to="/kathas-project"
          className="inline-block transition-all duration-300 transform group hover:scale-105 ">
          <span
            className="absolute top-0 right-0 inline-block px-2 py-1 text-xs text-white transition-all bg-black rounded-tr group-hover:bg-violet-600 bg-opacity-70">
            WEB DESIGN / BRANDING</span>
          <img src={KathasE} className="object-cover object-center h-56 rounded-md shadow-lg w-96"
            alt="" />
          <h2 className="mt-1">Kathas Entertainment</h2>
          <button className="pt-1 pb-2 text-lg font-semibold transition-all group ">
            View Project
            <div className="h-1 w-0 group-hover:w-full duration-300 transition-all bg-violet-600 mt-0.5"></div>
          </button>
        </Link>
      </div>
      
      <div className="relative flex justify-center w-full col-span-12 sm:col-span-6 xl:col-span-4">
        <Link to="/nasta-project"
          className="inline-block transition-all duration-300 transform group hover:scale-105 ">
          <span
            className="absolute top-0 right-0 inline-block px-2 py-1 text-xs text-white transition-all bg-black rounded-tr group-hover:bg-violet-600 bg-opacity-70">WEB
            DESIGN / BRANDING</span>
          <img src={Nasta} className="object-cover object-center h-56 rounded-md shadow-lg w-96"
            alt="" />
          <h2 className="mt-1">
            Nasta
          </h2>
          <button className="pt-1 pb-2 text-lg font-semibold transition-all group ">
            View Project
            <div className="h-1 w-0 group-hover:w-full duration-300 transition-all bg-violet-600 mt-0.5"></div>
          </button>
        </Link>
      </div>
      <div className="flex justify-center w-full col-span-12 sm:col-span-6 xl:col-span-4">
        <Link to="/metal-n-clay-logo-project"
          className="inline-block transition-all duration-300 transform group hover:scale-105 ">
          <span
            className="absolute top-0 right-0 inline-block px-2 py-1 text-xs text-white transition-all bg-black rounded-tr group-hover:bg-violet-600 bg-opacity-70">LOGO
            DESIGN / BRANDING</span>
          <img src={MetalnClay}
            className="object-cover object-center h-56 rounded-md shadow-lg w-96" alt="" />
          <h2 className="mt-1">Metal N Clay</h2>
          <button className="pt-1 pb-2 text-lg font-semibold transition-all group ">
            View Project
            <div className="h-1 w-0 group-hover:w-full duration-300 transition-all bg-violet-600 mt-0.5"></div>
          </button>
        </Link>
      </div>

      <div className="flex justify-center w-full col-span-12 sm:col-span-6 xl:col-span-4">
        <Link to="/kathas-entertainment-logo-project"
          className="inline-block transition-all duration-300 transform group hover:scale-105 ">
          <span
            className="absolute top-0 right-0 inline-block px-2 py-1 text-xs text-white transition-all bg-black rounded-tr group-hover:bg-violet-600 bg-opacity-70">LOGO
            DESIGN / BRANDING</span>
          <img src={Kathas} className="object-cover object-center h-56 rounded-md shadow-lg w-96"
            alt="" />
          <h2 className="mt-1">Kathas Entertainment (logo)</h2>
          <button className="pt-1 pb-2 text-lg font-semibold transition-all group ">
            View Project
            <div className="h-1 w-0 group-hover:w-full duration-300 transition-all bg-violet-600 mt-0.5"></div>
          </button>
        </Link>
      </div>
      <div className="flex justify-center w-full col-span-12 sm:col-span-6 xl:col-span-4">
        <Link to="/trident-logo-project"
          className="inline-block transition-all duration-300 transform group hover:scale-105 ">
          <img src={Trident}
            className="object-cover object-center h-56 rounded-md shadow-lg w-96" alt="" />
          <span
            className="absolute top-0 right-0 inline-block px-2 py-1 text-xs text-white transition-all bg-black rounded-tr group-hover:bg-violet-600 bg-opacity-70">LOGO
            DESIGN / BRANDING</span>
          <h2 className="mt-1">Trident</h2>
          <button className="pt-1 pb-2 text-lg font-semibold transition-all group ">
            View Project
            <div className="h-1 w-0 group-hover:w-full duration-300 transition-all bg-violet-600 mt-0.5"></div>
          </button>
        </Link>
      </div>
    </main>
  )
}