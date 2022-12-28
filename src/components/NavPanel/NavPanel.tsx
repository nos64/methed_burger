import Container from '../Container';
import React from 'react';
import styles from './NavPanel.module.scss';
import { navPanelData } from '../../common/navPanelData';
import NavItem from './NavItem';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <Container>
        <div className={styles.navigation__container}>
          <ul className={styles.navigation__list}>
            {navPanelData.map((item) => (
              <NavItem key={item.id} {...item} />
            ))}
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navigation;
