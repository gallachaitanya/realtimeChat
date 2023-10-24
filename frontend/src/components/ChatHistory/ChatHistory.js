import Message from "../Message/Message";

const ChatHistory = ({messages}) =>{
    return(
        <div className="text-left p-4">
        <h1 className="text-2xl font-semibold my-2 mx-10">Chat History</h1>
        {messages.map((message,index)=>(
            <Message key={index} msg={message.data} />
        ))}
        </div>
    )
}

export default ChatHistory;