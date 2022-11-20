import { useEffect } from 'react';
import styles from './Modal.module.css';

export default function Modal({ modalImage, setModalImage }) {
  const escapeClose = ({ code }) => {
    if (code === 'Escape') {
      setModalImage('');
    }
  };

  const backgroundClose = (e) => {
    if (modalImage !== e.target.currentSrc) {
      setModalImage('');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', escapeClose);

    return () => window.removeEventListener('keydown', escapeClose);
  });

  return (
    <div className={styles.Modal} onClick={backgroundClose}>
      <div>
        <img className={styles.Content} src={modalImage} alt="img" />
      </div>
    </div>
  );
}
