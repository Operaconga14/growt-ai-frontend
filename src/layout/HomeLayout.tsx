import { Outlet } from "react-router-dom";
import { IconButton } from "../shared/Buttons";
import styles from "../styles/Chatbot.module.css"
import ChatBot from "../components/ChatBot";
import { useState } from "react";

export default function HomeLayout() {

  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  }

  return <div>
    <main>
      <div id={`${styles.chatbotContainer}`} style={{ position: "fixed", bottom: "-85px", right: "0", zIndex: "99999999" }} className={`${isChatbotOpen ? styles.chatbotOpen : styles.hidden}`}>
        <ChatBot />
      </div>
      <Outlet />
      <div className={`${styles.chatButtonContainer} d-flex position-fixed bottom-0 end-0 m-3 rounded-circle p-1`}>
        <IconButton className={`${styles.chatButton} btn btn-transparent`} text={""} icon={"bi bi-chat text-white fs-4"} onClick={toggleChatbot} />
      </div>
    </main>
  </div>

}