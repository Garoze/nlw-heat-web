import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';

import { api } from '../../services/api';

import logoImg from '../../assets/logo.svg';
import styles from './styles.module.scss';

type User = {
  name: string;
  avatar_url: string;
};

type Message = {
  id: string;
  message: string;
  user: User;
};

const messagesQueue: Message[] = [];

const socket = io('http://localhost:4000');
socket.on('new_message', (message: Message) => messagesQueue.push(message));

export const MessageList = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    setInterval(() => {
      if (messagesQueue.length > 0) {
        setMessages((prev) =>
          [messagesQueue[0], prev[0], prev[1]].filter(Boolean)
        );
        messagesQueue.shift();
      }
    }, 3000);
  }, []);

  useEffect(() => {
    api.get<Message[]>('messages/last').then((response) => {
      setMessages(response.data);
    });
  }, []);

  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="DoWhile 2021" />
      <ul className={styles.messageList}>
        {messages.map((message) => {
          return (
            <li key={message.id} className={styles.message}>
              <p className={styles.messageContent}>{message.message}</p>
              <div className={styles.messageUser}>
                <div className={styles.userImage}>
                  <img src={message.user.avatar_url} alt={message.user.name} />
                </div>
                <span>{message.user.name}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
