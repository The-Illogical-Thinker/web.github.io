import { Card } from "./Card"
import { Data } from "./Data"
import './App.css'

export const Info = ({className=""}) => {
    return <Card className={`${className}`}>
        {CardComponent}
    </Card>
}

function Inform ({name, img, email, location}){
    return <div className="py-3 grid grid-cols-1">
        <img src={img} className="w-30 rounded-2xl col-span-1 justify-self-center mt-10"/>
        <div className="col-span-1 justify-self-center text-xl font-medium text-black my-2">{name}</div>
        <div className="col-span-1 justify-self-center mb-2">{email}</div>
        <div className="col-span-1 justify-self-center">{location}</div>
        </div>
}

const CardComponent = Data.map(lmao => <Inform key={lmao.name} img={lmao.pic} name={lmao.name} email={lmao.email} location={lmao.location} ></Inform>)