import { useContext } from 'react';

import { MessageList } from './components/MessageList';
import { AuthContext } from './contexts/AuthContext';

import { LoginBox } from './components/LoginBox';
import { SendMessageForm } from './components/SendMessageForm';

import styles from './styles/App.module.scss';

export const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <main
      className={`${styles.contentWrapper} ${
        !!user ? styles.contentSigned : ''
      }`}
    >
      <MessageList />
      {!!user ? <SendMessageForm /> : <LoginBox />}
    </main>
  );
};
