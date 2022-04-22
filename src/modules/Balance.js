import { formatCurrency } from './utils';

export default class Balance {
  constructor(income, expense, total) {
    this.income = document.querySelector(income);
    this.expense = document.querySelector(expense);
    this.total = document.querySelector(total);
  }

  static getIncomes() {
    const { transactions } = localStorage;
    return JSON.parse(transactions).reduce((acc, transaction) => {
      if (transaction.type === 'income') {
        return acc + +transaction.amount;
      }
      return acc;
    }, 0);
  }

  static getExpenses() {
    const { transactions } = localStorage;
    return JSON.parse(transactions).reduce((acc, transaction) => {
      if (transaction.type === 'expense') {
        return acc + +transaction.amount;
      }
      return acc;
    }, 0);
  }

  setBalance() {
    const incomes = Balance.getIncomes();
    const expenses = Balance.getExpenses();
    const total = incomes + expenses;

    this.income.textContent = formatCurrency(incomes);
    this.expense.textContent = formatCurrency(expenses);
    this.total.textContent = formatCurrency(total);
  }

  init() {
    if (localStorage.transactions) {
      this.setBalance();
    }
    return this;
  }
}
