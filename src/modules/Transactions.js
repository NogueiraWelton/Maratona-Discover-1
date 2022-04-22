/* eslint-disable object-curly-newline */
import Transaction from './Transaction';
import { formatCurrency } from './utils';

export default class Transactions {
  constructor(form, container, modal, balance) {
    const { transactions } = localStorage;
    this.transactions = transactions ? JSON.parse(transactions) : [];
    this.form = document.querySelector(form);
    this.container = document.querySelector(container);
    this.modal = modal;
    this.balance = balance;
    this.setTransaction = this.setTransaction.bind(this);
  }

  static getTransaction(event) {
    const { description, amount, date } = event.target.elements;
    return new Transaction(
      description.value,
      amount.value.replace(/[.,]/g, ''),
      date.value,
      amount.value > 0 ? 'income' : 'expense',
    );
  }

  static setTemplate(descripton, amount, date, type, index) {
    return `
      <td class="description">${descripton}</td>
      <td class="${type}">${formatCurrency(amount)}</td>
      <td class="date">${date}</td>
      <td><img data-remove data-id="${index}" src="./assets/minus.svg" alt="Remover Transação"></td>
    `;
  }

  saveTransaction() {
    localStorage.transactions = JSON.stringify(this.transactions);
  }

  endForm() {
    this.modal.toggleModal();
    this.form.reset();
  }

  createTransaction({ description, amount, date, type }, index) {
    const splittedDate = date.split('-');
    const formattedDate = `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`;
    const tr = document.createElement('tr');
    tr.innerHTML = Transactions.setTemplate(
      description,
      amount,
      formattedDate,
      type,
      index,
    );
    this.container.appendChild(tr);
    tr.querySelector('img[data-remove]').addEventListener('click', () => {
      this.removeTransaction(index);
    });
  }

  removeTransaction(index) {
    this.transactions.splice(index, 1);
    this.saveTransaction();
    this.reloadTransactions();
  }

  getTransactions() {
    this.transactions.forEach((transaction, index) => {
      this.createTransaction(transaction, index);
    });
  }

  reloadTransactions() {
    this.container.innerHTML = '';
    this.getTransactions();
    this.balance.setBalance();
  }

  setTransaction(event) {
    event.preventDefault();
    this.transactions.push(Transactions.getTransaction(event));
    this.saveTransaction();
    this.endForm();
    this.reloadTransactions();
  }

  setTransactionEvent() {
    this.form.addEventListener('submit', this.setTransaction);
  }

  init() {
    this.setTransactionEvent();
    this.getTransactions();
  }
}
