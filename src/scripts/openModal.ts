import { IProduct } from "../types/IProduct";
import { 
  modalProducTitle,
  modalProductImage,
  modalProductDescription,
  ingredientsList,
  ingredientsCalories,
  modalProductPriceCount,
  modalProduct
} from "./elements";

export const openModal = (product: IProduct) => {

  if (modalProducTitle && modalProducTitle instanceof HTMLElement) {
    modalProducTitle.textContent = product.title;
  }

  if (modalProductImage && modalProductImage instanceof HTMLImageElement) {
    modalProductImage.src = product.image;
  }

  if (modalProductDescription && modalProductDescription instanceof HTMLParagraphElement) {
    modalProductDescription.textContent = product.description;
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
    ingredientsCalories.textContent = `${product.weight.toString()}г, ${product.calories.toString()}ккал`;
  }

  if (modalProductPriceCount && modalProductPriceCount instanceof HTMLSpanElement) {
    modalProductPriceCount.textContent = product.price.toString();
  }

  modalProduct?.classList.add('modal_open');
}