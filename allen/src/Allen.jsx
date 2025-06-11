import { Card } from "./Card";
import { Courses } from "./Courses";

export function Allen(){
    return <div className="font-semibold">
        <div className="bg-green-400 flex">
            <span className="text-yellow-400">Get upto 90% SCHOLARSHIP</span><span className="text-white">  on NEET repeater courses for 2026</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 stroke-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
        </div>
        <div className="bg-gray-200 h-100 grid justify-items-center items-center mb-15">
            <Card className={"w-230"}><img src="Screenshot 2025-06-11 233657.png" className="rounded-4xl"></img></Card>
        </div>
        <Courses className={""}/>
        </div>
}