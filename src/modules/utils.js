/* eslint-disable import/prefer-default-export */
export const formatCurrency = (value) => (value / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
