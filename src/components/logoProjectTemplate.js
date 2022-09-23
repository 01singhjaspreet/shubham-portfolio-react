import React from "react";
import BottomPagination from "./bottomPagination";
export default function LogoProjectTemplate({ description, category, type, images, url }) {
  return (
    <main
      className="container flex flex-col items-center justify-center px-4 mx-auto mt-10"
    >
      <h1 className="w-full text-lg font-medium">Logo Description</h1>
      <div className="grid grid-cols-12 gap-2.5 mt-6 w-full text-gray-700">
        <div className="order-2 col-span-12 lg:col-span-5 lg:order-1">

          <p className="w-full ">
            {description}
          </p>
          <h2 className="w-full mt-6 text-lg font-semibold">Details</h2>
          <p className="">
            <span className="mt-6 font-medium">Category:</span> {category}
          </p>
          <p className="">
            <span className="font-medium">Type:</span> {type}
          </p>
          {url &&
            <a className='inline-flex items-center gap-2 px-4 py-2.5 mt-12 text-xl font-medium border-2 border-violet-600 text-violet-600 transition-all rounded-lg hover:bg-violet-600 hover:text-white' target="_blank" href={url} rel='noopener noreferrer'>View Website
              <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
                <path d="M 40.960938 4.9804688 A 2.0002 2.0002 0 0 0 40.740234 5 L 28 5 A 2.0002 2.0002 0 1 0 28 9 L 36.171875 9 L 22.585938 22.585938 A 2.0002 2.0002 0 1 0 25.414062 25.414062 L 39 11.828125 L 39 20 A 2.0002 2.0002 0 1 0 43 20 L 43 7.2460938 A 2.0002 2.0002 0 0 0 40.960938 4.9804688 z M 12.5 8 C 8.3826878 8 5 11.382688 5 15.5 L 5 35.5 C 5 39.617312 8.3826878 43 12.5 43 L 32.5 43 C 36.617312 43 40 39.617312 40 35.5 L 40 26 A 2.0002 2.0002 0 1 0 36 26 L 36 35.5 C 36 37.446688 34.446688 39 32.5 39 L 12.5 39 C 10.553312 39 9 37.446688 9 35.5 L 9 15.5 C 9 13.553312 10.553312 12 12.5 12 L 22 12 A 2.0002 2.0002 0 1 0 22 8 L 12.5 8 z" /></svg>
            </a>
          }
        </div>
        <div className="order-1 col-span-12 lg:col-span-6 lg:col-start-7 lg:order-2">
          <img
            src={images[0]}
            className="object-cover object-center w-full rounded"
            alt=""
          />
        </div>
      </div>
      <div className="grid w-full grid-cols-12 col-span-12 gap-4 mt-4">
        <img
          src={images[1]}
          className="object-cover object-center w-full col-span-12 mt-2 text-sm rounded lg:col-span-6"
          alt=""
        />
        <img
          src={images[2]}
          className="object-cover object-center w-full col-span-12 rounded lg:col-span-6"
          alt=""
        />
      </div>
      <div className="grid w-full grid-cols-12 col-span-12 gap-4 mt-4">
        <img
          src={images[3]}
          className="object-cover w-full col-span-12 mt-2 text-sm rounded object-centerw-full lg:col-span-6"
          alt=""
        />
        <img
          src={images[4]}
          className="object-cover w-full col-span-12 mt-2 text-sm rounded object-centerw-full lg:col-span-6"
          alt=""
        />
      </div>
      <BottomPagination />
    </main>
  )
}