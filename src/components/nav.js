import Resume from '../assets/Resume.pdf';
import { Link, useMatch } from 'react-router-dom';
import React, { useRef } from 'react';
import crossIcon from '../assets/hamMenu/crossIcon.svg';
import hamIcon from '../assets/hamMenu/hamIcon.svg';

export default function Nav() {
    const isHome = useMatch('/');
    const isWork = useMatch('/work');
    const hamMenuOpenScreen = useRef(null);
    const handleOpenHamMenu = () => {
        document.body.style.overflow = "hidden";
        hamMenuOpenScreen.current.style.width = "100vw";
    };

    const handleCloseHamMenu = () => {
        document.body.style.overflow = "auto";
        hamMenuOpenScreen.current.style.width = "0";
    };

    return (
        <nav className="sticky top-0 left-0 z-20 w-full h-16 px-4 bg-white sm:h-auto">
            <div className="container items-center justify-between hidden w-full py-2 mx-auto sm:flex desktopMenu">
                <Link to="/">
                    <h1 className="text-xl font-bold">Shubham Mourya</h1>
                    <h4 className="text-sm">UI/UX Designer</h4>
                </Link>
                <div className="flex items-center text-lg nav-links">
                    <Link class="pb-2 mr-6 pt-1 transition-all group" to='/'>
                        Home
                        <div class={`div-underline h-0.5 group-hover:w-full duration-300 transition-all bg-violet-600 mt-0.5 ${isHome ? 'w-full' : 'w-0'}`}></div>
                    </Link>
                    <Link class="pb-2 mr-6 pt-1 transition-all group" to='/work'>
                        Work
                        <div class={`div-underline h-0.5 group-hover:w-full duration-300 transition-all bg-violet-600 mt-0.5 ${isWork ? 'w-full' : 'w-0'}`}></div>
                    </Link>
                    <a class="pb-2 mr-6 pt-1 transition-all group" href={Resume} target="_blank" rel="noreferrer">
                        Resume
                        <div class={`div-underline h-0.5 group-hover:w-full duration-300 transition-all bg-violet-600 mt-0.5 ${isWork ? 'w-full' : 'w-0'}`}></div>
                    </a>
                </div>
            </div>
            <div className="container flex items-center justify-between h-full sm:hidden hamMenu">
                <Link to="/">
                    <h1 className="text-xl font-bold">Shubham Mourya</h1>
                    <h4 className="text-sm">UI/UX Designer</h4>
                </Link>
                <div className="relative flex flex-col items-center justify-center h-full">
                    <div className="hamMenu__ballIcon"></div>
                    <img src={hamIcon} className="w-9 h-9" alt='hamburger' onClick={handleOpenHamMenu} />
                </div>
            </div>
            <div ref={hamMenuOpenScreen} className="hamMenuOpenScreen">
                <div className="hamMenuOpenScreen__header">
                    <div className="hamMenu__ballIcon2"></div>
                    <img src={crossIcon} alt='close' className="w-8 h-8" onClick={handleCloseHamMenu} />
                </div>
                <div className="flex flex-col text-lg hamMenuOpenScreen__content">
                    <Link class="pb-2 mr-6 pt-1 transition-all group w-max w-fit" to='/'>
                        Home
                        <div class={`h-0.5 duration-300 transition-all bg-violet-600 mt-0.5 ${isHome ? 'w-full' : 'w-0'}`}></div>
                    </Link>
                    <Link class="pb-2 mr-6 pt-1 transition-all group w-max w-fit" to='/'>
                        Work
                        <div class={`h-0.5 duration-300 transition-all bg-violet-600 mt-0.5 ${isWork ? 'w-full' : 'w-0'}`}></div>
                    </Link>
                    <a href={Resume} target="_blank" rel="noreferrer">Resume</a>
                </div>
            </div>
            <div className="color-transition"></div>
        </nav>
    )
}