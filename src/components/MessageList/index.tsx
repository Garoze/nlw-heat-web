import logoImg from '../../assets/logo.svg';

import styles from './styles.module.scss';

export const MessageList = () => {
  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="DoWhile 2021" />
      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            de todos os tempos, vamooo pra cima! 🔥🔥
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/garoze.png" alt="Garoze" />
            </div>
            <span>Garoze (.Dev)</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            de todos os tempos, vamooo pra cima! 🔥🔥
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/garoze.png" alt="Dev" />
            </div>
            <span>O tal do .Dev</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            de todos os tempos, vamooo pra cima! 🔥🔥
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/garoze.png" alt="Dev" />
            </div>
            <span>O tal do .Dev</span>
          </div>
        </li>
      </ul>
    </div>
  );
};
