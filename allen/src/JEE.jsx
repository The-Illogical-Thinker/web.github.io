import { useState } from "react";
import { Card } from "./Card";
import { Fee as Feelist } from "./Fee";
import { Fee_twelve } from "./Fee";
import { Fee_thirteen } from "./Fee";

export function JEE(){

    const [Grade, setgrade] = useState(11);

    const FeeCardData = Grade === 11 ? Feelist : Grade === 12 ? Fee_twelve : Fee_thirteen;

    const FeeCard = FeeCardData.map((fees, index) => <Fees key={index} type={fees.type} course={fees.course} target={fees.target} plan1={fees.plan1} plan2={fees.plan2} plan3={fees.plan3} fees={fees.fees} />)

    return <div className="bg-gray-300">
        <div className="mx-80 mr-140">
            <span className="text-2xl font-semibold">Explore our JEE courses</span>
            <div className="flex gap-3 my-2">
                <Class onClick={() => setgrade(11)} className={Grade === 11 ? "border-sky-500 bg-sky-100" : "border-gray-600"}>Class 11</Class>
                <Class onClick={() => setgrade(12)} className={Grade === 12 ? "border-sky-500 bg-sky-100" : "border-gray-600"}>Class 12</Class> 
                <Class onClick={() => setgrade(13)} className={Grade === 13 ? "border-sky-500 bg-sky-100" : "border-gray-600"}>Class 12+</Class>
            </div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 stroke-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
            </div>
            <div className="grid grid-cols-2">
            {FeeCard}
            </div>
        </div>
    </div>
}

export function Class({children, className, onClick}){
    return <button className={`rounded-xl border-1 ${className}`} onClick={onClick}><Card className={` py-1 px-2 text-sm`}>{children}</Card></button>
}

export function Fees({className, type, course, target, plan1, plan2, plan3, fees}){
    return <Card className={`${className} bg-white h-fit w-90 rounded-xl my-3 cursor-pointer`}>
        <div className="p-3">
        <div className="bg-black text-white rounded-3xl px-2 w-fit">{type}</div>
        <div className="">{course}</div>
        <div className="text-gray-400 py-2">
            <div className="mb-4">{target}</div>
            <div className="flex gap-2 p-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg> {plan1}
            </div>
            <div className="flex gap-2 p-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg> {plan2}
            </div>
            <div className="flex gap-2 p-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg> {plan3}
            </div>
        </div>
        <div className="flex"><span>{fees}</span><span className="text-sm text-gray-500">+ Taxes applicable</span> <span className="text-sky-500 flex ml-auto">Know More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
        </span></div>
    </div>
    </Card>
}


