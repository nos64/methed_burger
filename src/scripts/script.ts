import { cartInint } from './cart';
import { 
  modalProduct,
  catalogList,
  countAmount,
} from './elements';
import { navigationListContoller } from './navigationListController';
import { openModal } from './openModal';
import { renderListProduct } from './renderListProduct';

const closeModal = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    modalProduct?.classList.remove('modal_open');
    document.removeEventListener('keydown', closeModal);
  }
}

document.addEventListener('keydown', closeModal);

catalogList?.addEventListener('click', (e: MouseEvent) => {
  const { target } = e;
  if (target && target instanceof HTMLButtonElement && target.closest('.product__detail')
    || target instanceof HTMLImageElement && target.closest('.product__image')) {
      const id: string | undefined = target.closest<HTMLElement>('.product')?.dataset.idProduct;
      if (id) {
        openModal(id);
      }
  }
})

modalProduct?.addEventListener('click', (e: MouseEvent) => {
  const { target } = e;
  if (target && target instanceof SVGElement
    && target.closest('.modal__close')
    || target === modalProduct) {
    modalProduct?.classList.remove('modal_open');
    if (countAmount && countAmount.textContent) {
      countAmount.textContent = '1';
    }
  }
});

const init = () => {
  renderListProduct();
  navigationListContoller(renderListProduct);
  cartInint();
}

init();

