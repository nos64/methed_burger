import React from 'react';
import { INavItem } from 'types/INavItem';
import styles from './NavItem.module.scss';

interface INavItemProps {
  item: INavItem;
  handleCategoryBtnClick: (id: number) => void;
}

const NavItem: React.FC<INavItemProps> = ({ item, handleCategoryBtnClick }) => {
  return (
    <li className={styles.navigation__item}>
      <button
        className={
          item.isActive
            ? `${styles.navigation__button} ${styles[item.modificator]} ${
                styles.navigation__button_active
              }`
            : `${styles.navigation__button} ${styles[item.modificator]}`
        }
        onClick={() => handleCategoryBtnClick(item.id)}
      >
        {item.buttonText}
      </button>
    </li>
  );
};

export default NavItem;
