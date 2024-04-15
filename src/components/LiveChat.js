import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {

    const [liveMessage, setLiveMessage] = useState("")

    const dispatch = useDispatch();

    const chatMessage = useSelector((store)=> store.chat.messages);

    useEffect(() => {
        const i =setInterval(() => {
        //API Pooling
       

        dispatch(addMessage({
            name: generateRandomName(),
            message: makeRandomMessage(20) + " 🚀",
        }),
    );
    }, 2000);

    return () => clearInterval(i);
}, []);

  return (
    <>
    <div className="w-full h-[25rem] ml-2 border border-black bg-gray-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
      
      <div>{chatMessage?.map((c, i) => (
        <ChatMessage key={i} name={c.name} message={c.message}/>
      ))
    }
      </div>
    </div>
    <form className="w-full p-2 ml-2 border border-black"
    onSubmit={(e)=> {
        e.preventDefault();

        dispatch(
            addMessage({
                name: "Dibas Biswal",
                message: liveMessage,
            })
        );
        setLiveMessage("");
    }}
    >
    <input  className="w-96" type="text" value={liveMessage} onChange={(e)=> {
        setLiveMessage(e.target.value);
    }} />
    <button className="px-2 mx-2 bg-green-500">Send</button>
  </form>
  </>
  )
}

export default LiveChat
