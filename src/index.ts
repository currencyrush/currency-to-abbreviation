import { CurrencyCodeType } from './types/CurrencyCodeType';
import getCurrencySymbol from './helpers/getCurrencySymbol';
import validateInputLocale from './helpers/validateInputLocale';
/**
 *  Convert numbers to abbreviated currency values. Example: 1000000 -> $1M
 * @example CurrencyToAbbreviation({
 * inputNumber: 1364000,
 * inputLocale: 'en-US',
 * inputCurrencyCode: 'USD',
 * decimalPlacesToRound: 2,
 * lowerCaseAbbreviation: true}) // returns '$1.36m'
 */
export const CurrencyToAbbreviation = ({
  inputNumber,
  inputLocale,
  inputCurrencyCode,
  decimalPlacesToRound,
  lowerCaseAbbreviation,
}: {
  inputNumber: number;
  inputLocale?: string;
  inputCurrencyCode?: CurrencyCodeType;
  decimalPlacesToRound?: number;
  lowerCaseAbbreviation?: boolean;
}) => {
  inputLocale = validateInputLocale(inputLocale);
  inputCurrencyCode = inputCurrencyCode ? inputCurrencyCode : 'USD';

  const currencySymbol = getCurrencySymbol(inputLocale, inputCurrencyCode);

  if (typeof inputNumber !== 'number') {
    throw Error(`The "inputNumber" parameter passed to CurrencyToAbbreviation must be of type "number"`);
  } else if (inputNumber < 1) {
    return (
      currencySymbol +
      inputNumber.toLocaleString(inputLocale, {
        maximumFractionDigits: typeof decimalPlacesToRound === 'number' ? decimalPlacesToRound : 2,
        minimumFractionDigits: typeof decimalPlacesToRound === 'number' ? decimalPlacesToRound : 2,
      })
    );
  } else if (inputNumber >= 1 && inputNumber < 100) {
    return (
      currencySymbol +
      inputNumber.toLocaleString(inputLocale, {
        maximumFractionDigits: typeof decimalPlacesToRound === 'number' ? decimalPlacesToRound : 2,
        minimumFractionDigits: typeof decimalPlacesToRound === 'number' ? decimalPlacesToRound : 2,
      })
    );
  } else if (inputNumber >= 100 && inputNumber < 1000) {
    return (
      currencySymbol +
      inputNumber.toLocaleString(inputLocale, {
        maximumFractionDigits: typeof decimalPlacesToRound === 'number' ? decimalPlacesToRound : 0,
        minimumFractionDigits: typeof decimalPlacesToRound === 'number' ? decimalPlacesToRound : 0,
      })
    );
  } else if (inputNumber >= 1000 && inputNumber < 1000000) {
    inputNumber = inputNumber / 1000;
    return (
      currencySymbol +
      inputNumber.toLocaleString(inputLocale, {
        maximumFractionDigits: typeof decimalPlacesToRound === 'number' ? decimalPlacesToRound : 1,
        minimumFractionDigits: typeof decimalPlacesToRound === 'number' ? decimalPlacesToRound : 1,
      }) +
      `${lowerCaseAbbreviation ? 'k' : 'K'}`
    );
  } else if (inputNumber >= 1000000 && inputNumber < 1000000000) {
    inputNumber = inputNumber / 1000000;
    return (
      currencySymbol +
      inputNumber.toLocaleString(inputLocale, {
        maximumFractionDigits: typeof decimalPlacesToRound === 'number' ? decimalPlacesToRound : 1,
        minimumFractionDigits: typeof decimalPlacesToRound === 'number' ? decimalPlacesToRound : 1,
      }) +
      `${lowerCaseAbbreviation ? 'm' : 'M'}`
    );
  } else if (inputNumber >= 1000000000 && inputNumber < 1000000000000) {
    inputNumber = inputNumber / 1000000000;
    return (
      currencySymbol +
      inputNumber.toLocaleString(inputLocale, {
        maximumFractionDigits: typeof decimalPlacesToRound === 'number' ? decimalPlacesToRound : 1,
        minimumFractionDigits: typeof decimalPlacesToRound === 'number' ? decimalPlacesToRound : 1,
      }) +
      `${lowerCaseAbbreviation ? 'b' : 'B'}`
    );
  } else if (inputNumber >= 1000000000000) {
    inputNumber = inputNumber / 1000000000000;
    return (
      currencySymbol +
      inputNumber.toLocaleString(inputLocale, {
        maximumFractionDigits: typeof decimalPlacesToRound === 'number' ? decimalPlacesToRound : 1,
        minimumFractionDigits: typeof decimalPlacesToRound === 'number' ? decimalPlacesToRound : 1,
      }) +
      `${lowerCaseAbbreviation ? 't' : 'T'}`
    );
  }
};
