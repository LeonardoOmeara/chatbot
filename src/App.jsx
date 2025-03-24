import { useState } from "react";
import ChatbotIIcon from "./components/ChatbotIIcon";
import ChatForm from "./components/ChatForm";
import ChatMessage from "./components/ChatMessage";

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);
  return (
    <div className="container">
      <div className="chatbot-popup">
        {/* Chatbot Header*/}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIIcon />
            <h2 className="logo-text">Chatbot</h2>
          </div>

          <button className="material-symbols-rounded">
            keyboard_arrow_down
          </button>
        </div>

        {/* Chatbot Body*/}
        <div className="chat-body">
          <div className="message bot-message">
            <ChatbotIIcon />
            <p className="message-text">
              Hola! <br />
              como puedo ayudarte?
            </p>
          </div>

          {/*Render the chat history dynamically*/}
          {chatHistory.map((chat, index) =>(
            <ChatMessage key={index} chat={chat}/>
          ))}
          
        </div>

        {/* Chatbot Footer*/}
        <div className="chat-footer">
          <ChatForm setChatHistory = {setChatHistory}/>
        </div>
      </div>
    </div>
  );
};

export default App;
