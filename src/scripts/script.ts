import { 
  modalProduct,
  catalogList,
} from './elements';
import { navigationListContoller } from './navigationListController';
// import { openModal } from './openModal';
import { renderListProduct } from './renderListData';


catalogList?.addEventListener('click', (e: MouseEvent) => {
  const { target } = e;
  if (target && target instanceof HTMLButtonElement && target.closest('.product__detail')
    || target instanceof HTMLImageElement && target.closest('.product__image')) {
      // openModal(BurgerMax);
  }
})

modalProduct?.addEventListener('click', (e: MouseEvent) => {
  const { target } = e;
  if (target && target instanceof SVGElement
    && target.closest('.modal__close')
    || target === modalProduct) {
    modalProduct?.classList.remove('modal_open');
  }
});

const init = () => {
  renderListProduct();
  navigationListContoller();
}

init();

