import { IconButton } from "../shared/Buttons"
import Icon from "../shared/Icon"
import styles from "../styles/Chatbot.module.css"
import Image from "../shared/Image"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export default function ChatBot() {

    const [messages, setMessages] = useState<Array<{ text: string, isUser: boolean }>>([])
    const [isBotTyping, setIsBotTyping] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null)
    const [isClose, setIsClose] = useState(false)


    useEffect(() => {

        setTimeout(() => {
            setMessages([{ text: "Hello there! How can I help you today?", isUser: false }])

        }, 3000);
    }, [])

    // Handle user input on send
    const handelSubmit = () => {
        if (inputRef.current && inputRef.current.value.trim()) {
            const userMessage = inputRef.current.value
            setMessages([...messages, { text: userMessage, isUser: true }])
            inputRef.current.value = ''

            inputRef.current.focus()

            setIsBotTyping(true)

            setTimeout(() => {
                const botReply = getBotResponse(userMessage)
                setIsBotTyping(false)
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: botReply, isUser: false }
                ])
            }, 3000);
        }
    }

    // Dummy bot message
    const getBotResponse = (userMessage: string) => {
        const lowerCaseMessage = userMessage.toLocaleLowerCase();
        if (lowerCaseMessage.includes("Hello") || lowerCaseMessage.includes("hi")) {
            return "Hello! How can I assist you today?";
        } else if (lowerCaseMessage.includes("how are you")) {
            return "I'm doing well, thank you for asking!";
        } else {
            return "I'm not sure I understand. Can you please rephrase?";
        }
    }

    return <div className={`container d-flex min-vh-100 w-auto justify-content-center align-items-center ${isClose ? styles.chatbotOpen : styles.hidden}`}>
        <div className={`${styles.chatbotPopup}`}>
            <div className={`${styles.chatHeader} px-4 p-0 d-flex justify-content-between flex-row-reverse`}>
                <IconButton icon="bi bi-x fs-3" onClick={() => setIsClose(true)} className="btn btn-transparent p-0 m-0 text-white" classNameIconText="fs-2" text="" />
                <div className="" style={{ width: "140px", height: "40px", display: "inline-block", position: "relative", overflow: "hidden" }}>
                    <Image
                        src={"/logo.png"}
                        altText="Logo"
                        className={`img-fluid`}
                        styles={{ width: "100%", objectFit: "cover", display: "block", height: "100%" }}
                    />
                </div>
                <Icon className="bi bi-robot fs-3" />

            </div>
            <div className={`${styles.chatBody}`}>
                <div className={`card ${styles.card} min-vw-50 shadow-sm border-0`}>
                    <div className="card-body overflow-x-hidden overflow-y-auto">
                        <div className="d-flex gap-1 justify-content-between flex-column">
                            {/* Initial bot mesage */}
                            {messages.length > 0 && messages[0].text === "Hello there?" && (
                                <div className="d-flex robot gap-2">
                                    <div className="rounded-circle shadow-sm">
                                        <Icon className="bi bi-robot fs-3" />
                                    </div>
                                    <div className={`${styles.messageContainer} text-muted p-2 rounded`}>
                                        {messages[0].text}
                                    </div>
                                </div>
                            )}

                            {messages.map((message, index) => (
                                <div key={index} className={`d-flex ${message.isUser ? 'flex-row-reverse' : 'flex-row'} gap-2 mb-3`}>
                                    <div className="rounded-circle shadow-sm">
                                        <Icon className={`bi ${message.isUser ? 'bi-person-circle' : 'bi-robot'} fs-3`} />
                                    </div>
                                    <div className={`${styles.messageContainer} ${message.isUser ? 'text-muted' : ''} p-2 rounded`}>
                                        <p>{message.text}</p>
                                    </div>
                                </div>
                            ))}

                            {isBotTyping && (
                                <div className="d-flex robot gap-2">
                                    <div className="rounded-circle shadow-sm">
                                        <Icon className="bi bi-robot fs-3" />
                                    </div>
                                    <div className={`${styles.messageContainer} text-muted p-2 rounded`}>
                                        <motion.p
                                            initial={{ opacity: 0, y: 5 }}
                                            animate={{
                                                opacity: [1, 0.6, 1], transition: {
                                                    repeat: Infinity,
                                                    duration: 0.8,
                                                    repeatType: "loop",
                                                    ease: "easeInOut"
                                                }
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            Typing...
                                        </motion.p>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                    <div className="card-footer border-0 px-2 bg-white">
                        <div className="d-flex gap-2 bg-transpaent">
                            <input
                                className="form-control text-muted"
                                type="text"
                                style={{ height: "50px" }}
                                placeholder="Type a message"
                                ref={inputRef}
                            />
                            <IconButton
                                text=""
                                className={`btn ${styles.sendButton} border-0 px-3`}
                                onClick={() => handelSubmit()} icon={"bi bi-send text-white"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
