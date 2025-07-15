import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react"
import { Card } from "./Card";
import { Courses } from "./Courses";

export function Allen({className}){

    const [photo, setPhoto] = useState(true);
    const timerRef = useRef(null);

    useEffect(() => 
        {
            resetTimer();

            return () => {
                clearInterval(timerRef.current);
            }
        }, 
        []);

    function resetTimer(){
        if (timerRef.current){
            clearInterval(timerRef.current);
        }
        timerRef.current = setInterval(() => 
        {
            setPhoto(prev => !prev)
        }, 5000);
    }


    return <div className={`${className} font-semibold`}>
        <div className="bg-green-400 flex justify-center items-center gap-2 p-3 cursor-pointer fixed w-full">
            <span className="text-yellow-400 ">Get upto 90% SCHOLARSHIP</span><span className="text-white">on NEET repeater courses for 2026</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 stroke-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
        </div>
        <div className="bg-gray-200 h-100 grid justify-items-center items-center mb-15">
            <Card className={"w-230 cursor-pointer grid justify-items-center overflow-hidden"}>
                <AnimatePresence mode="wait">
                    <motion.img 
                        draggable="false"
                        src={photo ? "Screenshot 2025-06-15 121326.png" : "Screenshot 2025-06-11 233657.png"} 
                        className="rounded-4xl h-50 w-230" 
                        key={photo ? "img1" : "img2"}
                        initial={{opacity: 0, x: "-100%"}} //scale to zoom in zoom out animation
                        animate={{opacity: 1, x: 0}} // x and y to feel like its coming from left-right or up-down
                        exit={{opacity:0, x: "100%"}}
                        transition={{duration: 0.8, ease: "easeInOut"}}
                        />
                </AnimatePresence>
                <div className="mt-13">
                    <Button onClick={() => {setPhoto(true); resetTimer();}} className={`${photo ? "bg-black" : "bg-gray-400"}`}/>
                    <Button onClick={() => {setPhoto(false); resetTimer();}} className={`${photo ? "bg-gray-400" : "bg-black"}`}/>
                </div>
            </Card>
        </div>
        <Courses className={""}/>
        </div>
}

function Button({onClick, className}){
    return <button onClick={onClick} className={`${className} w-3 h-3 mx-2 rounded-2xl`}/>
}