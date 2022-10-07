import React from 'react';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center w-full pt-6 mt-20 text-white bg-violet-1000">
      <div className="text-3xl font-bold xl:text-4xl">
        Let's get in touch
      </div>
      <div className='flex items-center gap-2 mt-2'>
        <a className="inline-block underline"
          href="mailto:shubhammourya148@gmail.com">Email</a>
        <span> |</span>

        <a href="https://www.linkedin.com/in/shubham-mourya-89193a217/" target="_blank" rel="noreferrer" className="inline-block underline">
          Linkedin
        </a>
        <span> |</span>
        <a href="https://www.instagram.com/amateurdesi9ner/" target="_blank" rel="noreferrer" className="inline-block underline">
          Instagram
        </a>
        <span> |</span>
        <a href="https://unsplash.com/@1shubham" target="_blank" rel="noreferrer" className="inline-block underline">
          Unsplash
        </a>
      </div>
      <div className="flex flex-col items-center w-full px-4 py-5 pt-0 mt-6 text-sm">
        <div>
          <span>
            Designed with &#x2764; by me. Developed by
            <a href="https://jaspreetportfolio.netlify.app/" className="underline ml-0.5">Jaspreet</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
