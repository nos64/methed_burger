import { IProduct } from "../types/IProduct";
import { API_URL } from "./constants";

export const createCardProduct = (product: IProduct) => {
  const li = document.createElement('li');
  li.className = 'ingredients__item';

  const article = document.createElement('article');
  article.className = 'product';

  const img = document.createElement('img');
  img.className = 'product__image';
  img.src = `${API_URL}/${product.image}`;
  img.alt = product.title;

  const price = document.createElement('p');
  price.className = 'product__price';
  const priceCount = document.createElement('span');
  priceCount.className = 'product__price-count';
  priceCount.textContent = product.price.toString();
  const currency = document.createElement('span');
  currency.className = 'currency';
  currency.textContent = '₽';
  price.append(priceCount, currency);

  const h3 = document.createElement('h3');
  h3.className = 'ptoduct__title';
  const titleButton = document.createElement('button');
  titleButton.className = 'product__detail';
  titleButton.textContent = product.title;
  h3.append(titleButton);

  const weight = document.createElement('p');
  weight.className = 'product__weight';
  weight.textContent = `${product.weight}г`;

  const addButton = document.createElement('button');
  addButton.className = 'product__add';
  addButton.textContent = 'Добавить';

  article.append(img, price, h3, weight, addButton);
  li.append(article);

  return li;
}