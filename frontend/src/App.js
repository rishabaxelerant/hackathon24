import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {useRef, useState} from "react";
import axios from "axios";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";

function App() {
  const conversation = useRef([]);
  const [chat, setChat] = useState([])

  const sendMessage = async (message) => {
    try{
      setChat([...chat, {
        message,
        sentTime: "just now",
        sender: "User",
        direction: "outgoing"
      }])
      const response = await axios({
        url: "http://127.0.0.1:8000/chat",
        method: "POST",
        data: {'human_say': message, 'conversation_history': conversation.current}
      });
      console.log('response', response);
      const {name, say} = response;
      const user_message = "User: " + message + "<END_OF_TURN>";
      const bot_reply = name + ": " + say;
      conversation.current.push(user_message);
      conversation.current.push(bot_reply);
      setChat([...chat, {
        message: bot_reply,
        sentTime: "just now",
        sender: name,
      }])
    }catch (e){
      console.log('err', e)
    }
  }

  return (
  <div style={{ position: "relative", height: "500px" }}>
    <MainContainer>
      <ChatContainer>
        <MessageList>
          {chat.map((c, index) => (<Message key={index} model={c}/>))}
        </MessageList>
        <MessageInput attachButton={false} placeholder="Type message here" onSend={sendMessage} />
      </ChatContainer>
    </MainContainer>
  </div>
  );
}

export default App;
