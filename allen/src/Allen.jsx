import { useEffect, useState } from "react";
import { Card } from "./Card";
import { Courses } from "./Courses";

export function Allen({className}){

    const [photo, setPhoto] = useState(true);

    useEffect(() => 
        {
            const interval = setInterval(() => 
            {
                setPhoto(prev => !prev)
            }, 5000);

            return () => {
                clearInterval(interval);
            }
        }, 
        []);
    console.log(photo);

    return <div className={`${className} font-semibold`}>
        <div className="bg-green-400 flex justify-center items-center gap-2 p-3 cursor-pointer fixed w-full">
            <span className="text-yellow-400 ">Get upto 90% SCHOLARSHIP</span><span className="text-white">on NEET repeater courses for 2026</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 stroke-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
        </div>
        <div className="bg-gray-200 h-100 grid justify-items-center items-center mb-15">
            <Card className={"w-230 cursor-pointer"}><img src={photo ? "Screenshot 2025-06-15 121326.png" : "Screenshot 2025-06-11 233657.png"} className="rounded-4xl h-50 w-230"></img></Card>
        </div>
        <Courses className={""}/>
        </div>
}