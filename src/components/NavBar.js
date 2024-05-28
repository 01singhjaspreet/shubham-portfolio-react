import Link from "./Link";
import React from "react";

export default function Nav() {
  return (
    <nav className="sticky top-0 left-0 z-20 w-full font-medium bg-white shadow-xl sm:h-auto">
      <div className="flex items-center justify-between w-full max-w-5xl px-4 py-3 mx-auto md:py-4">
        <Link href="/">
          <h1 className="text-xl font-bold md:text-2xl">Jaspreet Singh</h1>
        </Link>
        <abbr title="Send me an email">
          <Link href="mailto:jaspreet98singh@gmail.com">
            <svg
              className="h-6 transition-all fill-black hover:fill-sky-700 focus:fill-sky-700 lg:h-8 shrink-0"
              id="Layer_2"
              data-name="Layer 2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52.5 42"
            >
              <g id="Layer_1-2" data-name="Layer 1">
                <g>
                  <path
                    class="cls-1"
                    d="m26.2,42c-6.84,0-13.67,0-20.51,0-2.58,0-4.48-1.16-5.28-3.27-.25-.68-.4-1.43-.4-2.15C0,28.76,0,20.94,0,13.12c0-.3,0-.61.05-.9.2-1.11,1-1.52,1.96-.93,2.94,1.79,5.86,3.6,8.79,5.42,4.36,2.71,8.73,5.4,13.06,8.17,1.66,1.06,3.1,1,4.76-.06,7.07-4.51,14.2-8.93,21.3-13.37.25-.16.51-.32.78-.45.72-.34,1.37-.09,1.63.68.13.38.15.8.15,1.21,0,7.76,0,15.53,0,23.29,0,3.71-2.13,5.83-5.87,5.84-6.81,0-13.62,0-20.42,0Z"
                  />
                  <path
                    class="cls-1"
                    d="m26.42,0c6.75,0,13.51,0,20.26,0,1.52,0,2.92.34,4.09,1.38,1.31,1.17,1.28,2.59-.2,3.54-3.13,2-6.3,3.93-9.44,5.91-4.11,2.59-8.21,5.21-12.31,7.81-.23.15-.48.27-.7.43-1.26.9-2.48.74-3.73-.05-2.79-1.77-5.59-3.52-8.4-5.26-4.64-2.87-9.3-5.73-13.95-8.59C.34,4.12.2,2.89,1.61,1.51,2.91.24,4.55.01,6.24,0,12.96,0,19.69,0,26.42,0Z"
                  />
                </g>
              </g>
            </svg>
          </Link>
        </abbr>
      </div>
    </nav>
  );
}
