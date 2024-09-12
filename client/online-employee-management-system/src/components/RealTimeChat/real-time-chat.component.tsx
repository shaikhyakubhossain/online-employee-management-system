"use client";
import { useEffect, useRef, useState } from "react";
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
            {ws ? <ChatBox serverMessage={messagesList} /> : <div className="mb-auto bg-lime-600 text-white rounded p-2">Connecting to the server...</div>}
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