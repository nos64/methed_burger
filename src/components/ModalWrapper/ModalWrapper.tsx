import React, { useEffect } from 'react';
import styles from './ModalWrapper.module.scss';
import SVGPics from '../../assets/images/_sprite.svg';
import { scrollController } from './../../utils/scrollController';

interface IModalWrapperProps {
  isModalActive: boolean;
  setIsModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
}

const ModalWrapper: React.FC<IModalWrapperProps> = ({
  isModalActive,
  setIsModalActive,
  children,
}) => {
  useEffect(() => {
    isModalActive ? scrollController.disableScroll() : scrollController.enableScroll();
  }, [isModalActive]);

  const onEscapePress = (e: KeyboardEvent) => {
    if (e.code === 'Escape') {
      setIsModalActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onEscapePress);
    return () => {
      document.removeEventListener('keydown', onEscapePress);
    };
  });

  return (
    <div
      className={isModalActive ? styles.modal + ' ' + styles.modal_open : styles.modal}
      onClick={() => setIsModalActive(false)}
    >
      <div className={styles.modal__main} onClick={(e) => e.stopPropagation()}>
        {children}
        <button
          className={styles.modal__close}
          type="button"
          onClick={() => setIsModalActive(false)}
        >
          <svg
            className={styles.modal__closeIcon}
            viewBox="0 0 24 24"
            role="img"
            aria-label="закрытие модального окна"
          >
            <use href={`${SVGPics}#modalClose`} />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ModalWrapper;
