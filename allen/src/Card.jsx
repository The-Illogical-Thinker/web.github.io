import "./index.css"

export function Card({children, className}){
    return <div className={`${className} rounded-4xl`}>
        {children}
    </div>
}