import { navigationList, navigationListItems, catalogTitle } from "./elements"

type navClickFunction = (text: string | undefined) => void;

export const navigationListContoller = (callBack: navClickFunction) => {
  if (navigationList && navigationList instanceof HTMLUListElement) {
    navigationList.addEventListener('click', e => {
      if (e.target && e.target instanceof HTMLButtonElement) {
        const categoryItem = e.target.closest('.navigation__button');

        if (!categoryItem) {
          return;
        }
        if (navigationListItems) {
          navigationListItems.forEach((item: HTMLButtonElement) => {
            if (item === categoryItem) {
              item.classList.add('navigation__button_active');
              if (catalogTitle) {
                catalogTitle.textContent = item.textContent;
                callBack(item.dataset.category);
              }
              
            } else {
              item.classList.remove('navigation__button_active');
            }
          })
        }
      }
    })
  }
}