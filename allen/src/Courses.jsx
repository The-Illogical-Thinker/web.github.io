import { Card } from "./Card"

export function Courses({className}){
    return <div className={`${className} grid justify-items-center`}>
        <div className="w-fit">
        <span className="text-2xl">Pick the right course for you</span>
            <div className="flex my-5 gap-10">
                <Card className={"bg-gray-300 h-60 w-80 grid cursor-pointer"}>
                    <div className="my-3 mx-3 text-xl">
                        JEE Courses
                    </div>
                    <div className="flex self-end mb-3 mx-3 text-blue-600">
                        View Courses <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </Card>
                <Card className={"bg-gray-300 h-60 w-80 grid cursor-pointer"}>
                    <div className="my-3 mx-3 text-xl">
                        NEET Courses
                    </div>
                    <div className="flex self-end mb-3 mx-3 text-blue-600">
                        View Courses <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </Card>
                <Card className={"bg-gray-300 h-60 w-80 grid cursor-pointer"}>
                    <div className="my-3 mx-3 text-xl">
                        Courses for class 6 - 10
                    </div>
                    <div className="flex self-end mb-3 mx-3 text-blue-600">
                        View Courses <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </Card>
            </div>
            </div>
    </div>
}