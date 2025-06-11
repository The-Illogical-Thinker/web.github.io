import { Card } from "./Card"

export function Courses({className}){
    return <div className={className}>
        <span className="">Pick the right course for you</span>
            <div className="flex justify-center my-5">
                <Card className={"bg-gray-300 mx-5 h-60 w-80"}>
                    <div>
                        JEE Courses
                    </div>
                    <div>
                        View Courses <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </Card>
                <Card className={"bg-gray-300 mx-5 h-60 w-80"}>
                    <div>
                        JEE Courses
                    </div>
                    <div>
                        View Courses <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </Card>
                <Card className={"bg-gray-300 mx-5 h-60 w-80"}>
                    <div>
                        JEE Courses
                    </div>
                    <div>
                        View Courses <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </Card>
            </div>
    </div>
}