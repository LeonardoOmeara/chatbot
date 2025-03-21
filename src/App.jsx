import ChatbotIIcon from "./components/ChatbotIIcon";

const App = () => {
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
          <div className="message user-messsage">
            <p className="message-text">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>
        </div>

        {/* Chatbot Footer*/}
        <div className="chat-footer">
          <form action="#" className="chat-form">
            <input
              type="text"
              placeholder="Message..."
              className="message-input"
              required
            />
            <button className="material-symbols-rounded">keyboard_arrow_down</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
