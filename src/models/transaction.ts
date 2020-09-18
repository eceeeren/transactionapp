export default interface Transaction {
    id: number;
    name: string;
    description: string;
    date: Date;
    amount: number;
    currency: Currency;
}

export enum Currency {
    TRY = 1,
    USD,
    EUR
  }