import { useEffect, useState } from "react"

const Message = ({msg}) => {
    const [message,setMessage] = useState("")
    useEffect(()=>{
        setMessage(JSON.parse(msg))
    },[msg])
    return(
        <div className="mx-10 my-2 shadow-lg px-4 py-2 border-2 rounded-lg transition ease-in-out hover:-translate-y-1 hover:scale-105">
            {message.body}
        </div>
    )
}

export default Message