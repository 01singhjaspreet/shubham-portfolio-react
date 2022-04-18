import React from 'react';
import Linkedin from '../assets/social/linkedin.svg';
import Instagram from '../assets/social/instagram.svg';

export default function Footer() {
    return (
        <footer className="flex flex-col items-center w-full pt-10 mt-20 bg-violet-600">
            <div className="text-4xl font-bold text-gray-100 xl:text-5xl">
                Let's get in touch
            </div>
            <a className="inline-block mt-2 text-gray-100 underline"
                href="mailto:shubhammourya148@gmail.com">shubhammourya148@gmail.com</a>
            <div className="flex items-center justify-center w-full mt-4">
                <a href="https://www.linkedin.com/in/shubham-mourya-89193a217/" className="mx-2">
                    <img src={Linkedin} alt="" />
                </a>
                <a href="https://www.instagram.com/amateurdesi9ner/" className="mx-2">
                    <img src={Instagram} alt="" />
                </a>
            </div>
            <div className="flex flex-col items-center w-full px-4 py-5 mt-10 text-sm bg-white">
                <p>
                    Designed with &#x2764; by me. Developed by
                    <a href="https://jaspreetportfolio.netlify.app/" className="underline ml-0.5">Jaspreet</a>
                </p>
                <div>Copyright © Shubham Mourya.</div>
                <div className="mt-6 text-xs">
                    Icons courtesy of FlatIcon. Images courtesy of Unsplash and Freepik.
                </div>
            </div>
        </footer>
    )
}