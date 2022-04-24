import { CurrencyCodeType } from '../types/CurrencyCodeType';

const getCurrencySymbol = (inputLocale?: string, inputCurrencyCode?: CurrencyCodeType) =>
  (0)
    .toLocaleString(inputLocale, {
      style: 'currency',
      currency: inputCurrencyCode,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    .replace(/\d/g, '')
    .trim();

export default getCurrencySymbol;
