import { IProduct } from "../types/IProduct";
import { API_URL } from "./constants";

export const createCardProduct = (product: IProduct) => {
  const li: HTMLLIElement = document.createElement('li');
  li.className = 'ingredients__item';

  const article: HTMLElement = document.createElement('article');
  article.className = 'product';
  article.dataset.idProduct = product.id;

  const img: HTMLImageElement = document.createElement('img');
  img.className = 'product__image';
  img.src = `${API_URL}/${product.image}`;
  img.alt = product.title;

  const price: HTMLParagraphElement = document.createElement('p');
  price.className = 'product__price';
  const priceCount: HTMLSpanElement = document.createElement('span');
  priceCount.className = 'product__price-count';
  priceCount.textContent = product.price.toString();
  const currency: HTMLSpanElement = document.createElement('span');
  currency.className = 'currency';
  currency.textContent = '₽';
  price.append(priceCount, currency);

  const h3: HTMLHeadingElement = document.createElement('h3');
  h3.className = 'ptoduct__title';
  const titleButton = document.createElement('button');
  titleButton.className = 'product__detail';
  titleButton.textContent = product.title;
  h3.append(titleButton);

  const weight: HTMLParagraphElement = document.createElement('p');
  weight.className = 'product__weight';
  weight.textContent = `${product.weight}г`;

  const addButton: HTMLButtonElement = document.createElement('button');
  addButton.className = 'product__add';
  addButton.textContent = 'Добавить';

  article.append(img, price, h3, weight, addButton);
  li.append(article);

  return li;
}