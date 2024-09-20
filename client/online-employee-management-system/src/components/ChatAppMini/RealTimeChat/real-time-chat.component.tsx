"use client";
import { useEffect, useRef } from "react";
import styles from './real-time-chat.module.scss';
import ChatBox from "../ChatBox/chat-box.component";
import MessageInput from "../MessageInput/message-input.component";
import useWebSocket from "@/hooks/WebSocket/useWebSocket";

export default function RealTimeChat(): JSX.Element {
    const { messagesList, clientsOnline, ws } = useWebSocket();

    const containerOfMessageOutputRef = useRef<null | HTMLDivElement>(null);
    const containerOfInputRef = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        document.addEventListener("keyup", handleKeydown, true);
        return () => {
            document.removeEventListener("keyup", handleKeydown, true);
        }
    }, [ws]);

    useEffect(() => {
        handleScrollToBottom();
    }, [messagesList]);

    const handleKeydown = (event: KeyboardEvent) => {
        if(event.key === "Enter"){
            sendMessage();
        }
    }

    const sendMessage = () => {
        if((containerOfInputRef.current?.children[1].children[0] as HTMLInputElement).value.length <= 250){
            const inputValue = (containerOfInputRef.current?.children[1].children[0] as HTMLInputElement);
            // console.log(inputValue.value)
            if(ws && containerOfInputRef.current?.children[1].children[0] && inputValue.value !== ""){
                ws.send(inputValue.value);
                inputValue.value = "";
                // console.log(inputValue.value);
            }
            else{
                !ws && console.log("no server");
            }
        }
        else{
            (containerOfInputRef.current?.children[0] as HTMLDivElement).style.display = "block";
            setTimeout(() => {
                (containerOfInputRef.current?.children[0] as HTMLDivElement).style.display = "none";
            }, 2000)
            console.log("message too long");
        }
    }

    const handleScrollToBottom = () => {
        if(containerOfMessageOutputRef.current?.children[0]){
            containerOfMessageOutputRef.current.children[0].scrollTop = containerOfMessageOutputRef.current?.children[0].scrollHeight;
        }
    }

    return (
        <div className={`${styles.mainContainer} text-center mx-auto`} ref={containerOfMessageOutputRef}>
            {ws ? <ChatBox serverMessage={messagesList} /> : <div className="mb-auto bg-lime-600 text-white rounded p-2"><svg aria-hidden="true" role="status" className="inline w-6 h-6 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
</svg>
Connecting to the server...</div>}
            <div className='flex justify-center '>
                <div ref={containerOfInputRef} className="w-3/4 mx-auto">
                    <div className={`${styles.messageTooLongError} mb-auto bg-red-500 text-white rounded p-2`}>Message too long, max 250 characters</div>
                    <MessageInput sendMessageFunction={sendMessage}/>
                </div>
                <div>
                    {clientsOnline && <div className="bg-slate-500 text-white rounded p-2">Clients Online: {clientsOnline}</div>}
                </div>
            </div>
        </div>
    );
}