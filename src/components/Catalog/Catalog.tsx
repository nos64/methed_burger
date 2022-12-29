import Container from '../Container';
import React from 'react';
import styles from './Catalog.module.scss';
import Order from './Order';
import ProductList from './ProductList';

const Catalog = () => {
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
