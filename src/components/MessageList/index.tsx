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

export const MessageList = () => {
  const [messages, setMessages] = useState<Message[]>([]);

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
            <li className={styles.message} key={message.id}>
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
