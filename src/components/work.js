
import React from 'react';
import { Link } from 'react-router-dom';
import Mentor from '../assets/thumbnails/mentor.png';
import Kathas from '../assets/thumbnails/Kathas.png';
import MetalnClay from '../assets/thumbnails/MetalnClay.png';
import Trident from '../assets/thumbnails/Trident.png';
import Wedding from '../assets/thumbnails/wedding.png';

export default function Work() {

    return (
        <main class="container grid grid-cols-12 gap-5 px-4 mx-auto mt-12">
            <div class="relative flex justify-center w-full col-span-12 sm:col-span-6 xl:col-span-4">
                <Link to="/wedding-project"
                    class="inline-block transition-all duration-300 transform group hover:scale-105 ">
                    <span
                        class="absolute top-0 right-0 inline-block px-2 py-1 text-xs text-white transition-all bg-black rounded-tr group-hover:bg-violet-600 bg-opacity-70">WEB
                        DESIGN / BRANDING</span>
                    <img src={Wedding} class="object-cover object-center h-56 rounded-md shadow-lg w-96"
                        alt="" />
                    <h2 class="mt-1">
                        My Wedding Google UI/UX Assignment Project
                    </h2>
                    <button class="pb-2 pt-1 text-lg font-semibold transition-all group ">
                        View Project
                        <div class="h-1 w-0 group-hover:w-full duration-300 transition-all bg-violet-600 mt-0.5"></div>
                    </button>
                </Link>
            </div>
            <div class="flex justify-center w-full col-span-12 sm:col-span-6 xl:col-span-4">
                <Link to="/mentor-project"
                    class="inline-block transition-all duration-300 transform group hover:scale-105 ">
                    <span
                        class="absolute top-0 right-0 inline-block px-2 py-1 text-xs text-white transition-all bg-black rounded-tr group-hover:bg-violet-600 bg-opacity-70">WEB
                        DESIGN / BRANDING</span>
                    <img src={Mentor} class="object-cover object-center h-56 rounded-md shadow-lg w-96"
                        alt="" />
                    <h2 class="mt-1">Mentor</h2>
                    <button class="pb-2 pt-1 text-lg font-semibold transition-all group ">
                        View Project
                        <div class="h-1 w-0 group-hover:w-full duration-300 transition-all bg-violet-600 mt-0.5"></div>
                    </button>
                </Link>
            </div>
            <div class="flex justify-center w-full col-span-12 sm:col-span-6 xl:col-span-4">
                <Link to="/metal-n-clay-logo-project"
                    class="inline-block transition-all duration-300 transform group hover:scale-105 ">
                    <span
                        class="absolute top-0 right-0 inline-block px-2 py-1 text-xs text-white transition-all bg-black rounded-tr group-hover:bg-violet-600 bg-opacity-70">LOGO
                        DESIGN / BRANDING</span>
                    <img src={MetalnClay}
                        class="object-cover object-center h-56 rounded-md shadow-lg w-96" alt="" />
                    <h2 class="mt-1">Metal N Clay</h2>
                    <button class="pb-2 pt-1 text-lg font-semibold transition-all group ">
                        View Project
                        <div class="h-1 w-0 group-hover:w-full duration-300 transition-all bg-violet-600 mt-0.5"></div>
                    </button>
                </Link>
            </div>
            <div class="flex justify-center w-full col-span-12 sm:col-span-6 xl:col-span-4">
                <Link to="/kathas-entertainment-logo-project"
                    class="inline-block transition-all duration-300 transform group hover:scale-105 ">
                    <span
                        class="absolute top-0 right-0 inline-block px-2 py-1 text-xs text-white transition-all bg-black rounded-tr group-hover:bg-violet-600 bg-opacity-70">LOGO
                        DESIGN / BRANDING</span>
                    <img src={Kathas} class="object-cover object-center h-56 rounded-md shadow-lg w-96"
                        alt="" />
                    <h2 class="mt-1">Kathas Entertainments</h2>
                    <button class="pb-2 pt-1 text-lg font-semibold transition-all group ">
                        View Project
                        <div class="h-1 w-0 group-hover:w-full duration-300 transition-all bg-violet-600 mt-0.5"></div>
                    </button>
                </Link>
            </div>
            <div class="flex justify-center w-full col-span-12 sm:col-span-6 xl:col-span-4">
                <Link to="/trident-logo-project"
                    class="inline-block transition-all duration-300 transform group hover:scale-105 ">
                    <img src={Trident}
                        class="object-cover object-center h-56 rounded-md shadow-lg w-96" alt="" />
                    <span
                        class="absolute top-0 right-0 inline-block px-2 py-1 text-xs text-white transition-all bg-black rounded-tr group-hover:bg-violet-600 bg-opacity-70">LOGO
                        DESIGN / BRANDING</span>
                    <h2 class="mt-1">Trident</h2>
                    <button class="pb-2 pt-1 text-lg font-semibold transition-all group ">
                        View Project
                        <div class="h-1 w-0 group-hover:w-full duration-300 transition-all bg-violet-600 mt-0.5"></div>
                    </button>
                </Link>
            </div>
        </main>
    )
}