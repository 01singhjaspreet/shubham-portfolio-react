import React from 'react';
import Linkedin from '../assets/social/linkedin.svg';
import Instagram from '../assets/social/instagram.svg';

export default function Footer() {
    return (
        <footer class="flex flex-col items-center w-full pt-10 mt-20 bg-gray-700">
            <div class="text-4xl font-bold text-gray-100 xl:text-5xl">
                Let's get in touch
            </div>
            <a class="inline-block mt-2 text-gray-100 underline"
                href="mailto:shubhammourya148@gmail.com">shubhammourya148@gmail.com</a>
            <div class="flex items-center justify-center w-full mt-4">
                <a href="https://www.linkedin.com/in/shubham-mourya-89193a217/" class="mx-2">
                    <img src={Linkedin} alt="" />
                </a>
                <a href="https://www.instagram.com/amateurdesi9ner/" class="mx-2">
                    <img src={Instagram} alt="" />
                </a>
            </div>
            <div class="flex flex-col items-center w-full py-5 mt-10 text-sm px-4 bg-white">
                <p>
                    Designed with &#x2764; by me. Developed by
                    <a href="https://jaspreetportfolio.netlify.app/" class="underline">Jaspreet</a>
                </p>
                <div>Copyright © Shubham Mourya.</div>
                <div class="mt-6 text-xs">
                    Icons courtesy of FlatIcon. Images courtesy of Unsplash and Freepik.
                </div>
            </div>
        </footer>
    )
}