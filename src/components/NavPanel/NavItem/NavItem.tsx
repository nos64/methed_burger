import React from 'react';
import styles from './NavItem.module.scss';

interface INavItemProps {
  id: number;
  modificator: string;
  buttonText: string;
  isActive: boolean;
}

const NavItem: React.FC<INavItemProps> = ({ modificator, buttonText, isActive }) => {
  return (
    <li className={styles.navigation__item}>
      <button
        className={
          isActive
            ? `${styles.navigation__button} ${styles[modificator]} ${styles.navigation__button_active}`
            : `${styles.navigation__button} ${styles[modificator]}`
        }
      >
        {buttonText}
      </button>
    </li>
  );
};

export default NavItem;
