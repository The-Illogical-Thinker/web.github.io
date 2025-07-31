import { Tasks } from "./Tasks"
import { Info } from "./Info"
import { Data } from "./Data"
import { Time } from "./Time"
import { Manage } from "./Manage"
import { Apply } from "./Apply"
import { createContext, useContext, useState } from "react"
import { VisibleContext } from "./VisibleContext"

export const DarkContext = createContext();;

function App(){
  const { isVisible } = useContext(VisibleContext);

  return <DarkProvider>
    <div className="grid grid-cols-10 dark:bg-black bg-white">
      <Tasks className={`h-screen grid transition-all duration-500 ease-in-out ${isVisible ? `col-span-2` : ""} items-start md:block justify-items-center md:justify-items-normal auto-rows-min`}/>
      <div className={`${isVisible ? "col-span-8" : "col-span-10"} transition-all duration-500 ease-in-out grid grid-cols-11 auto-rows-min -mt-8`}>
        <img src="goku.webp" alt="pic here" className={`h-25 w-screen col-span-11`}/>
        <Info className="col-span-3 mx-10  h-90 -my-5 "/>
        <div className="col-span-4 grid grid-cols-1 my-7">
          <span className="col-span-1 my-2">{Time.Day}, {Time.Date}</span>
          <span className="col-span-1 text-2xl font-bold text-yellow-400 my-3">Good Morning, {Data[0].name}!</span>
          <Manage className="my-5"/>
        </div>
        <Apply className="col-span-4 mx-6"/>
      </div>
    </div>
  </DarkProvider>
}

function DarkProvider({ children }){
  const [dark, setDark] = useState(false);
  return <DarkContext.Provider value={{dark: dark, setDark: setDark}}>
    {children}
  </DarkContext.Provider>
}



export default App