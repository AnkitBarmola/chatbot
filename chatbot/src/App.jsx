import { useState } from "react";

function ChatInput() {
  function saveInputText(event) {
    // later you can store this in state
    console.log(event.target.value);
  }

  return (
    <>
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
      />
      <button>Send</button>
    </>
  );
}

function ChatMessage({ message, sender }) {
  return (
    <div>
      {sender === "robot" && (
        <img src="/robot.png" width="50" />
      )}

      {message}

      {sender === "user" && (
        <img src="/user.png" width="50" />
      )}
    </div>
  );
}

function ChatMessages() {
  const [chatMessages, setChatMessages] = useState([
    {
      message: "hello chatbot",
      sender: "user",
      id: "id1",
    },
    {
      message: "Hello! How can I help you?",
      sender: "robot",
      id: "id2",
    },
    {
      message: "can you get me todays date?",
      sender: "user",
      id: "id3",
    },
    {
      message: "Today is January 11",
      sender: "robot",
      id: "id4",
    },
  ]);

  function sendMessage() {
    setChatMessages([
      ...chatMessages,
      {
        message: "test",
        sender: "user",
        id: crypto.randomUUID(),
      },
    ]);
  }

  return (
    <>
      <button onClick={sendMessage}>Send message</button>

      {chatMessages.map((chatMessage) => (
        <ChatMessage
          key={chatMessage.id}
          message={chatMessage.message}
          sender={chatMessage.sender}
        />
      ))}
    </>
  );
}

export default function App() {
  return (
    <>
      <ChatInput />
      <ChatMessages />
    </>
  );
}
