import { ICartItem } from "../types/ICartItem";
import { modalDeliveryContainer, modalDeliveryForm } from "./elements"

export const orderController = (getCart: () => ICartItem[] | [], clearCart: () => void) => {
  const checkDelivery = () => {
    if (modalDeliveryForm?.format.value === 'pickup') {
      modalDeliveryForm['address-info'].classList.add('modal-delivery__fieldset_hide')
    }
    if (modalDeliveryForm?.format.value === 'delivery') {
      modalDeliveryForm['address-info'].classList.remove('modal-delivery__fieldset_hide');
    }
  }

  modalDeliveryForm?.addEventListener('change', checkDelivery);

  modalDeliveryForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (modalDeliveryForm) {
      const formData = new FormData(modalDeliveryForm);
      const data: { [k: string] : FormDataEntryValue | ICartItem[] | []; } = Object.fromEntries(formData);
      data.order = getCart();
      if (data.format === 'pickup') {
        delete data.address;
        delete data.floor;
        delete data.intercom;
      }
      fetch('https://reqres.in/api/users', {
        method: 'POST',
        body: JSON.stringify(data),
      }).then(response => response.json())
      .then()
        .then((res) => {
          clearCart();
          modalDeliveryForm?.reset();
          checkDelivery();
          if (modalDeliveryContainer) {
            modalDeliveryContainer.innerHTML = `
            <h2>Спасибо большое за заказ</h2>
            <h3>Номер Вашего заказа ${res.id}</h3>
          `
          }
          
        })
    }

    
  })
}