import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Navbar } from "../navbar/navbar";

interface Currency {
  uzs: number;
  usd: number;
  eur: number;
}

@Component({
  selector: 'app-converter',
  imports: [
    FormsModule,
    Navbar
],
  templateUrl: './converter.html',
  styleUrl: './converter.css',
})
export class Converter {
  amount!: number;
  convertedAmount!: number;

  currencyAmount: Currency = {
    uzs: 12000,
    eur: 0.85,
    usd: 1,
  };

  fromCurrency: keyof Currency = 'uzs';
  toCurrency: keyof Currency = 'usd';

  changeCurrency(status: Event): void {
    const select = status.target as HTMLSelectElement;
    this.fromCurrency = select.value as keyof Currency;
    this.convert();
  }

  changeConvertedCurrency(status: Event): void {
    const select = status.target as HTMLSelectElement;
    this.toCurrency = select.value as keyof Currency;
    this.convert();
  }

  changeAmount(amount: number): void {
    this.amount = amount
    this.convert();
  }

  changeConvertedAmount(convertedAmount: number): void {
    this.convertedAmount = convertedAmount;
    this.reverseConvert();
  }

  private convert(): void {
    const fromRate = this.currencyAmount[this.fromCurrency];
    const toRate = this.currencyAmount[this.toCurrency];
    this.convertedAmount = (this.amount / fromRate) * toRate;
  }

  private reverseConvert(): void {
    const fromRate = this.currencyAmount[this.fromCurrency];
    const toRate = this.currencyAmount[this.toCurrency];
    this.amount = (this.convertedAmount / toRate) * fromRate;
  }
}
