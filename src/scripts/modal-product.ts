const modalProduct: HTMLDivElement | null = document.querySelector('.modal_product');
const catalogList: HTMLUListElement | null = document.querySelector('.catalog__list');

const product = {
  title: 'Burger Maks',
  price: 1000,
  weight: 5000,
  calories: 15000,
  descriptions: 'Mege Burger wow wow wow wow wow wow',
  image: 'assets/burger_1.jpg',
  ingredients: [
    'Bulka',
    'Mega Kotleta from beef',
    'More more cheese',
    'Salad',
    'Chipol'
  ]
}

catalogList?.addEventListener('click', (e: MouseEvent) => {
  const { target } = e;
  console.log('target: ', target);
  if (target && target instanceof HTMLButtonElement && target.closest('.product__detail')
    || target instanceof HTMLImageElement && target.closest('.product__image')) {
      modalProduct?.classList.add('modal_open');
  }
})

modalProduct?.addEventListener('click', (e: MouseEvent) => {
  const { target } = e;
  if (target && target instanceof SVGElement
    && target.closest('.modal__close')
    || target === modalProduct) {
    modalProduct.classList.remove('modal_open');
  }
});


const modalProducTitle: HTMLElement | null = document.querySelector('.modal-product__title');
const modalProductImage: HTMLImageElement | null = document.querySelector('.modal-product__image');
const modalProductDescription: HTMLParagraphElement | null = document.querySelector('.modal-product__description');
const ingredientsList: HTMLUListElement | null = document.querySelector('.ingredients__list');
const ingredientsCalories: HTMLParagraphElement | null = document.querySelector('.ingredients__calories');
const modalProductPriceCount: HTMLSpanElement | null = document.querySelector('.modal-product__price-count');

if (modalProducTitle && modalProducTitle instanceof HTMLElement) {
  modalProducTitle.textContent = product.title;
}

if (modalProductImage && modalProductImage instanceof HTMLImageElement) {
  modalProductImage.src = product.image;
}

if (modalProductDescription && modalProductDescription instanceof HTMLParagraphElement) {
  modalProductDescription.textContent = product.descriptions;
}

const ingredientsListItems: HTMLLIElement[] = product.ingredients.map((item) => {
  const li = document.createElement('li');
  li.className = 'ingredients__item';
  li.textContent = item;
  return li
})
if (ingredientsList && ingredientsList instanceof HTMLUListElement) {
  ingredientsList.textContent = '';
  ingredientsList?.append(...ingredientsListItems);
}

if (ingredientsCalories && ingredientsCalories instanceof HTMLParagraphElement) {
  ingredientsCalories.textContent = product.calories.toString();
}

if (modalProductPriceCount && modalProductPriceCount instanceof HTMLSpanElement) {
  modalProductPriceCount.textContent = product.price.toString();
}

