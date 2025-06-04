import './App.css'

export const Card = ({children, className=""}) => {
    return <div className={`bg-white rounded-2xl text-gray-400 shadow-xl ${className}`}>
        {children}
    </div>
}

