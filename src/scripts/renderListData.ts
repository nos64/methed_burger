import { API_URL, PREFIX_PRODUCT } from "./constants";
import { createCardProduct } from "./createCardProduct";
import { catalogList } from "./elements";
import { getData } from "./getData";
import { IProduct } from "../types/IProduct";

export const renderListProduct = async () => {
  if (catalogList && catalogList instanceof HTMLUListElement) {
    catalogList.textContent = '';
  }
  const listProduct: IProduct[] = await getData(`${API_URL}${PREFIX_PRODUCT}`)
  const listCard = listProduct.map(item => createCardProduct(item));
  catalogList?.append(...listCard);
}
