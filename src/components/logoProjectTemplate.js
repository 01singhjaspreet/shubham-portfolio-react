import React from "react";
import BottomPagination from "./bottomPagination";
export default function LogoProjectTemplate({ description, category, type, images }) {
    return (
        <main
            className="container flex flex-col items-center justify-center px-4 mx-auto mt-10"
        >
            <div className="grid grid-cols-12 gap-2.5 mt-6 w-full text-gray-700">
                <div className="col-span-12 lg:col-span-5">
                    <h2 className="text-lg font-medium">Logo Description</h2>
                    <p className="w-full mt-6 ">
                        {description}
                    </p>
                    <h2 className="w-full mt-6 text-lg font-semibold">Details</h2>
                    <p className="">
                        <span className="mt-6 font-medium">Category:</span> {category}
                    </p>
                    <p className="">
                        <span className="font-medium">Type:</span> {type}
                    </p>
                </div>
                <div className="col-span-12 lg:col-span-6 lg:col-start-7">
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