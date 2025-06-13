export function Footer({className}){

    function Topic({children}){
        return <div className="font-bold text-sm my-5">
            {children}
        </div>
    }

    function Subtopic({children}){
        return <div className="my-5 cursor-pointer font-extralight">
            {children}
        </div>
    }

    return <div className={`bg-gray-300 h-150 grid items-center ${className}`}>
        <div className=" grid grid-cols-6 mx-60">
        <div className="col-span-1">
            <Topic>
                About
            </Topic>
            <Subtopic>
                About us
            </Subtopic>
            <Subtopic>
                Blog
            </Subtopic>
            <Subtopic>
                News
            </Subtopic>
        </div>
        <div className="col-span-1"> 
            <Topic>
                Help & Support
            </Topic>
            <Subtopic>
                Refund Policy
            </Subtopic>
            <Subtopic>
                Transfer Policy
            </Subtopic>
            <Subtopic>
                Terms & Conditions
            </Subtopic>
            <Subtopic>
                Contact us
            </Subtopic>
        </div>
        <div className="col-span-1">
            <Topic>
                Popular goals
            </Topic>
            <Subtopic>
                NEET Coaching
            </Subtopic>
            <Subtopic>
                JEE Coaching
            </Subtopic>
            <Subtopic>
                6th to 10th
            </Subtopic>
        </div>
        <div className="col-span-1">
            <Topic>
                Courses
            </Topic>
            <Subtopic>
                Online Courses
            </Subtopic>
            <Subtopic>
                Distance Learning
            </Subtopic>
            <Subtopic>
                Online Test Series
            </Subtopic>
            <Subtopic>
                Test Series
            </Subtopic>
        </div>
        <div className="col-span-1">
            <Topic>
                Centers
            </Topic>
            <Subtopic>
                Kota
            </Subtopic>
            <Subtopic>
                Bangalore
            </Subtopic>
            <Subtopic>
                Indore
            </Subtopic>
            <Subtopic>
                More centres
            </Subtopic>
        </div>
        <div className="col-span-1">
            <Topic>
                Exam Information
            </Topic>
            <Subtopic>
                JEE Main
            </Subtopic>
            <Subtopic>
                JEE Advanced
            </Subtopic>
            <Subtopic>
                NEETUG
            </Subtopic>
            <Subtopic>
                CBSE
            </Subtopic>
        </div>
        </div>
    </div>
}