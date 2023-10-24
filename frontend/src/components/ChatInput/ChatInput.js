
const ChatInput = ({send}) => {
    return(
        <div className="mx-14">
            <input type="text" onKeyDown={send} placeholder="Type your message here. Hit enter to send" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2 px-4 focus:ring-gray-300 focus:border-gray-300" />
        </div>
    )
}

export default ChatInput