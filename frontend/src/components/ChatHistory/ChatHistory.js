
const ChatHistory = ({messages}) =>{
    return(
        <div className="text-left p-4">
        <h1 className="text-2xl font-semibold my-2">Chat History</h1>
        {messages.map((message,index)=>(
            <p key={index} className="font-sans my-2">{message.data}</p>
        ))}
        </div>
    )
}

export default ChatHistory;