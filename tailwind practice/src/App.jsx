import { Tasks } from "./Tasks"
import { Info } from "./Info"
import { Data } from "./Data"
import { Time } from "./Time"
import { Manage } from "./Manage"
import { Apply } from "./Apply"

function App(){
  return <div className="grid grid-cols-10">
    <Tasks className="col-span-1 h-screen grid items-start md:block justify-items-center md:justify-items-normal md:col-span-2 auto-rows-min"/>
    <div className="col-span-8 grid grid-cols-11 auto-rows-min">
      <img src="goku.webp" alt="pic here" className="h-25 w-screen col-span-11"/>
      <Info className="col-span-3 mx-10  h-90 -my-5 "/>
      <div className="col-span-4 grid grid-cols-1 my-7">
        <span className="col-span-1 my-2">{Time.Day}, {Time.Date}</span>
        <span className="col-span-1 text-2xl font-bold text-yellow-400 my-3">Good Morning, {Data[0].name}!</span>
        <Manage className="my-5"/>
      </div>
      <Apply className="col-span-4 mx-6"/>
    </div>
  </div>
}

export default App