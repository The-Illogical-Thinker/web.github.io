export function Header(){
    return <div className="grid grid-cols-15 h-15 items-center sticky top-0 bg-white">
        <div className="flex justify-items-center gap-7 col-span-13 items-center">
        <div className="cursor-pointer px-4 text-3xl text-blue-600 font-bold">
            Allen
        </div>
        <div className="cursor-pointer">
            Courses
        </div>
        <div className="cursor-pointer">
            Test Series
        </div>
        <div className="cursor-pointer">
            Results
        </div>
        <div className="cursor-pointer">
            Study Materials
        </div>
        <div className="cursor-pointer">
            Scholarships
        </div>
        <div className="cursor-pointer">
            Books
        </div>
        <div className="cursor-pointer">
            More
        </div>
        </div>
        <div className="col-span-1 justify-self-end">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-sky-500 fill-sky-500 cursor-pointer hover:fill-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
        </div>
        <div className="col-span-1 justify-self-center">
            <button className="border-sky-500 rounded-3xl border-2 p-2 cursor-pointer hover:bg-gray-300">Login</button>
        </div>
    </div>
}