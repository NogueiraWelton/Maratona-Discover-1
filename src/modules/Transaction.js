export default class Transaction {
  constructor(description, amount, date, type) {
    this.description = description;
    this.amount = amount;
    this.date = date;
    this.type = type;
  }
}
