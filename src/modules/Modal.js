export default class Modal {
  constructor(modal) {
    this.modal = document.querySelector(modal);
    this.opBtn = document.querySelector('.new-transaction');
    this.clBtn = this.modal.querySelector('.cancel');
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(event) {
    if (event) {
      event.preventDefault();
    }
    this.modal.classList.toggle('modal--active');
  }

  addModalEvents() {
    this.opBtn.addEventListener('click', this.toggleModal);
    this.clBtn.addEventListener('click', this.toggleModal);
  }

  init() {
    if (this.modal && this.opBtn && this.clBtn) {
      this.addModalEvents();
    }
    return this;
  }
}
