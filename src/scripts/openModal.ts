import { IProduct } from "../types/IProduct";
import { API_URL, PREFIX_PRODUCT } from "./constants";
import { 
  modalProducTitle,
  modalProductImage,
  modalProductDescription,
  ingredientsList,
  ingredientsCalories,
  modalProductPriceCount,
  modalProduct,
  modalProductBtn
} from "./elements";
import { getData } from "./getData";

export const openModal = async (id: string) => {
  const product: IProduct = await getData(`${API_URL}${PREFIX_PRODUCT}/${id}`)
  if (modalProducTitle && modalProducTitle instanceof HTMLElement) {
    modalProducTitle.textContent = product.title;
  }

  if (modalProductImage && modalProductImage instanceof HTMLImageElement) {
    modalProductImage.src = `${API_URL}/${product.image}`;
  }

  if (modalProductDescription && modalProductDescription instanceof HTMLParagraphElement) {
    modalProductDescription.textContent = product.description;
  }

  const ingredientsListItems: HTMLLIElement[] = product.ingredients.map((item: string) => {
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
  if (modalProductBtn) {
    modalProductBtn.dataset.idProduct = product.id;
  }

  modalProduct?.classList.add('modal_open');
}