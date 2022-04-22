import './styles/style.scss';
import Modal from './modules/Modal';
import Transactions from './modules/Transactions';
import Balance from './modules/Balance';
import ColorScheme from './modules/ColorScheme';

const modal = new Modal('[data-modal="overlay"]');
modal.init();

const balance = new Balance(
  '[data-display="income"]',
  '[data-display="expense"]',
  '[data-display="total"]',
);
balance.init();

const transactions = new Transactions(
  '[data-form]',
  '[data-transactions="container"]',
  modal,
  balance,
);
transactions.init();

const colorScheme = new ColorScheme('#toggle-theme-button');
colorScheme.init();
