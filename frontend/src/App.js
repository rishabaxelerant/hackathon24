import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { useRef, useState } from "react";
import axios from "axios";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  MessageGroup,
  Message,
  Avatar,
  MessageSeparator,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";
import Header from "./header/index";
import avatarIco from "./avatar.svg";
import botAvatarIco from "./axl-bot.svg";
import Footer from "./footer/index";

function App() {
  const conversation = useRef([]);
  const [chat, setChat] = useState([]);
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const sendMessage = async (message) => {
    try {
      setChat([
        ...chat,
        {
          message,
          sentTime: "just now",
          sender: "User",
          direction: "outgoing",
          avatar: avatarIco,
        },
      ]);
      const response = await axios({
        url: "http://127.0.0.1:8000/chat",
        method: "POST",
        data: {
          human_say: message,
          conversation_history: conversation.current,
        },
      });
      const { name, say } = response.data;
      const user_message = "User: " + message + "<END_OF_TURN>";
      const bot_reply = name + ": " + say;
      conversation.current.push(user_message);
      conversation.current.push(bot_reply);
      setChat((c) => {
        return [
          ...c,
          {
            direction: c.direction,
            message: bot_reply,
            sentTime: "just now",
            sender: name,
            avatar: botAvatarIco,
          },
        ];
      });
    } catch (e) {
      console.log("err", e);
    }
  };

  return (
    <>
      <Header />
      <main
        className="main__wrapper"
        style={{ position: "relative", height: "500px" }}
      >
        {/* <h1>Axelerant Sales GPT</h1> */}
        <MainContainer>
          <ChatContainer>
            <MessageList>
              <MessageSeparator
                content={`Today, ${today.toDateString()}`}
                as="h2"
              />
              {chat.map((c, index) => (
                <MessageGroup direction={c.direction}>
                  <Avatar src={c.avatar} name={c.sender} />
                  <MessageGroup.Messages>
                    <Message key={index} model={c} />
                  </MessageGroup.Messages>
                </MessageGroup>
              ))}
            </MessageList>
            <MessageInput
              attachButton={false}
              placeholder="Try saying hi!"
              autoFocus
              onSend={sendMessage}
            />
          </ChatContainer>
        </MainContainer>
      </main>
      <Footer />
    </>
  );
}

export default App;
