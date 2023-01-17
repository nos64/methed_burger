import React, { useState } from 'react';

import { useAppDispatch } from 'hooks/redux';
import { setActiveCategory } from 'store/reducers/productSlice';

import NavItem from './NavItem';

import { navPanelData } from '../../common/navPanelData';
import { INavItem } from 'types/INavItem';

import styles from './NavPanel.module.scss';

const NavPanel: React.FC = () => {
  const [activeCategoryArray, setActiveCategoryArray] = useState<INavItem[]>(navPanelData);
  const dispatch = useAppDispatch();

  const handleCategoryBtnClick = (id: number) => {
    const updatedBtnsArray = navPanelData.map((item: INavItem) =>
      item.id === id ? { ...item, isActive: true } : { ...item, isActive: false }
    );
    setActiveCategoryArray(updatedBtnsArray);

    const activeCat = updatedBtnsArray.find((item) => item.isActive);
    if (activeCat) {
      dispatch(setActiveCategory(activeCat));
    }
  };

  return (
    <nav className={styles.navigation}>
      <div className={styles.navigation__container}>
        <ul className={styles.navigation__list}>
          {activeCategoryArray.map((item) => (
            <NavItem key={item.id} item={item} handleCategoryBtnClick={handleCategoryBtnClick} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavPanel;
