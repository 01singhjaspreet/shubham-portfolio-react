
import React from 'react';
import DP from '../assets/DP.png';

export default function Home() {

    return (
        <main
            class="container flex flex-col items-center justify-between w-full px-4 mx-auto mt-10 xl:flex-row xl:justify-evenly">
            <img class="mb-20 rounded-full shadow xl:mb-0 w-80 xl:w-72 xl:h-72" src={DP} alt="Shubham" />
            <div class="max-w-3xl xl:pl-8">
                <div class="font-semibold text-violet-600">HELLO THERE,</div>
                <div class="font-bold text-7xl">I'm Shubham</div>
                <p class="mt-4 leading-5">
                    I am a UI/UX designer based in Hyderabad, India. I am a B.Sc Computer
                    Science graduate and later switched to the awesome world of designing
                    digital interfaces and products.
                </p>
                <p class="my-4 leading-5">
                    I think understanding the human experience is essential for creating
                    useful and effective products that make life easier. I enjoy using my
                    skill-set to empower people to accomplish their goals.
                </p>
                <p class="leading-5 ">
                    My development stack is focused on performance & accessibility with
                    delightful interactions.
                </p>
            </div>
        </main>
    )
}