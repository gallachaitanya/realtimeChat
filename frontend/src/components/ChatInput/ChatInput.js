
const ChatInput = ({send}) => {
    return(
        <div className="mx-4">
            <input type="text" onKeyDown={send} placeholder="Type your message here. Hit enter to send" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2" />
        </div>
    )
}

export default ChatInput