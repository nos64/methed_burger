import { ICartItem } from "../types/ICartItem";
import { IProduct } from "../types/IProduct";
import { catalogList, countAmount, modalProductBtn, orderCount, orderList, orderTotalAmount } from "./elements";
import { getData } from './getData';
import { API_URL, PREFIX_PRODUCT } from './constants';

const getCart = () => {
  const cartList = localStorage.getItem('cart');
  if (cartList) {
    return JSON.parse(cartList);
  } 
    return [];
}

const renderCartList = async () => {
  const cartList: ICartItem[] = getCart();
  console.log('cartList: ', cartList);
  const allIdProduct = cartList.map((item: ICartItem) => item.id)
  const data = cartList.length
  ? await getData(`${API_URL}${PREFIX_PRODUCT}/?list=${allIdProduct}`)
  : [];
  
  const countProduct: number = cartList.reduce((acc: number, item: ICartItem) => acc + item.count, 0)
  if (orderCount) {
    orderCount.textContent = countProduct.toString();
  }
  const cartItems = data.map((item: IProduct) => {
    const li: HTMLLIElement = document.createElement('li');
    li.className = 'order__item';
    li.dataset.idProduct = item.id;

    const product = cartList.find((cartItem: ICartItem) => cartItem.id === item.id);
    if (product) {
      li.innerHTML = `
      <img class="order__image" src="${API_URL}/${item.image}" alt="${item.title}">
      <div class="order__product">
        <h3 class="order__product-title">${item.title}</h3>
        <p class="order__product-weight">${item.weight}г</p>
        <p class="order__product-price">${item.price}
          <span class="currency">₽</span>
        </p>
      </div>

      <div class="order__product-count count">
        <button class="count__minus" data-id-product=${product.id}>-</button>
        <p class="count__amount">${product.count}</p>
        <button class="count__plus" data-id-product=${product.id}>+</button>
      </div>
    `
    } 
    return li;
  });
  if (orderList) {
    orderList.textContent = '';
    orderList.append(...cartItems);
  }
  if (orderTotalAmount) {
    orderTotalAmount.textContent = data.reduce((acc: number, item: IProduct) => {
      const product = cartList.find((cartItem: ICartItem) => cartItem.id === item.id);
      if (product) {
        
        return acc + (item.price * product.count);
      }
      return 0
    }, 0).toString();
  }
}

const updateCartList = (cartList: ICartItem[]) => {
  localStorage.setItem('cart', JSON.stringify(cartList));
  renderCartList();
}

type changeCountCartFunction = (id: string | undefined, count?: number) => void;

const addCart: changeCountCartFunction = (id, count = 1) => {
  const cartList: ICartItem[] = getCart();
  const product = cartList.find((item) => item.id === id);

  if (product && product.count) {
    product.count += count;
  } else {
    cartList.push({id, count})
  }
  updateCartList(cartList);
}

const removeCart = (id: string | undefined) => {
  const cartList: ICartItem[] = getCart();
  const productIndex = cartList.findIndex((item) => item.id === id);
  cartList[productIndex].count -= 1;

  if (cartList[productIndex].count < 1) {
    cartList.splice(productIndex, 1)
  }
  updateCartList(cartList);
}

const cartController = () => {
  catalogList?.addEventListener('click', ({target}) => {
    if (target && target instanceof HTMLButtonElement && target.closest('.product__add')) {
      addCart(target.closest<HTMLElement>('.product')?.dataset.idProduct)
    }
  });

  if (modalProductBtn) {
    modalProductBtn.addEventListener('click', () => {
      if (countAmount && countAmount.textContent) {
        addCart(modalProductBtn?.dataset.idProduct, parseInt(countAmount.textContent , 10))
      }
    })
  }

  orderList?.addEventListener('click', ({ target }) => {
    if (target && target instanceof HTMLButtonElement) {
      const targetPlus: HTMLButtonElement | null = target.closest('.count__plus');
      const targetMinus: HTMLButtonElement | null = target.closest('.count__minus');
      if (targetPlus) {
        addCart(targetPlus.dataset.idProduct)
      }
      if (targetMinus) {
        removeCart(targetMinus.dataset.idProduct)
      }
    }
  })
}

export const cartInint = () => {
  cartController();
  renderCartList();
}