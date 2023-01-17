import React from 'react';

import Container from '../Container';
import Order from './Order';
import ProductList from './ProductList';

import styles from './Catalog.module.scss';

const Catalog: React.FC = () => {
  return (
    <section className={styles.catalog}>
      <Container>
        <div className={styles.catalog__container}>
          <Order />
          <ProductList />
        </div>
      </Container>
    </section>
  );
};

export default Catalog;
