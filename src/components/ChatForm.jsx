import { useRef } from "react";

const ChatForm = ({setChatHistory}) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";

    //console.log(userMessage);
    // update chat history with the user's message
    setChatHistory((history) => [...history, {role:"user", text: userMessage}]);
  };

  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Message..."
        className="message-input"
        required
      />
      <button className="material-symbols-rounded">keyboard_arrow_down</button>
    </form>
  );
};

export default ChatForm;
