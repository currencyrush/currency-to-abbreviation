import CurrencyToAbbreviation from '../index';

test('CurrencyToAbbreviation Test', () => {
  // under 0 tests
  expect(CurrencyToAbbreviation({ inputNumber: 0.152, inputLocale: 'en-US', inputCurrencyCode: 'USD' })).toBe('$0.15');
  expect(CurrencyToAbbreviation({ inputNumber: 0.152, inputLocale: 'en-US', inputCurrencyCode: 'USD' })).toBe('$0.15');
  expect(
    CurrencyToAbbreviation({
      inputNumber: 0.152567,
      inputLocale: 'en-US',
      inputCurrencyCode: 'USD',
      decimalPlacesToRound: 5,
    }),
  ).toBe('$0.15257');
  expect(
    CurrencyToAbbreviation({
      inputNumber: 0.152,
      inputLocale: 'de-DE',
      inputCurrencyCode: 'EUR',
      decimalPlacesToRound: 5,
    }),
  ).toBe('€0,15200');
  // >1= && <100 tests
  expect(CurrencyToAbbreviation({ inputNumber: 8, inputLocale: 'en-US', inputCurrencyCode: 'USD' })).toBe('$8.00');
  expect(CurrencyToAbbreviation({ inputNumber: 3.561, inputLocale: 'en-US', inputCurrencyCode: 'USD' })).toBe('$3.56');
  expect(CurrencyToAbbreviation({ inputNumber: 8.32, inputLocale: 'en-US', inputCurrencyCode: 'USD' })).toBe('$8.32');
  expect(CurrencyToAbbreviation({ inputNumber: 98.69, inputLocale: 'de-DE', inputCurrencyCode: 'EUR' })).toBe('€98,69');
  expect(
    CurrencyToAbbreviation({
      inputNumber: 8.92,
      inputLocale: 'en-US',
      inputCurrencyCode: 'USD',
      decimalPlacesToRound: 0,
    }),
  ).toBe('$9');
  expect(
    CurrencyToAbbreviation({
      inputNumber: 8.9268,
      inputLocale: 'en-US',
      inputCurrencyCode: 'USD',
      decimalPlacesToRound: 3,
    }),
  ).toBe('$8.927');
  //>=100 && <1000 tests
  expect(CurrencyToAbbreviation({ inputNumber: 978.69, inputLocale: 'de-DE', inputCurrencyCode: 'EUR' })).toBe('€979');
  //thousands tests
  expect(CurrencyToAbbreviation({ inputNumber: 1000, inputLocale: 'en-US', inputCurrencyCode: 'USD' })).toBe('$1.0K');
  expect(CurrencyToAbbreviation({ inputNumber: 987135, inputLocale: 'en-US', inputCurrencyCode: 'USD' })).toBe(
    '$987.1K',
  );
  expect(CurrencyToAbbreviation({ inputNumber: 987165, inputLocale: 'en-US', inputCurrencyCode: 'USD' })).toBe(
    '$987.2K',
  );
  // millions tests
  expect(CurrencyToAbbreviation({ inputNumber: 1000000, inputLocale: 'en-US', inputCurrencyCode: 'USD' })).toBe(
    '$1.0M',
  );
  expect(
    CurrencyToAbbreviation({
      inputNumber: 1000000,
      inputLocale: 'en-US',
      inputCurrencyCode: 'USD',
      decimalPlacesToRound: 3,
    }),
  ).toBe('$1.000M');
  expect(
    CurrencyToAbbreviation({
      inputNumber: 1253156,
      inputLocale: 'en-US',
      inputCurrencyCode: 'JPY',
      decimalPlacesToRound: 2,
    }),
  ).toBe('¥1.25M');
  expect(CurrencyToAbbreviation({ inputNumber: 12561576, inputLocale: 'de-DE', inputCurrencyCode: 'EUR' })).toBe(
    '€12,6M',
  );
  //billions tests
  expect(CurrencyToAbbreviation({ inputNumber: 1256157689, inputLocale: 'de-DE', inputCurrencyCode: 'EUR' })).toBe(
    '€1,3B',
  );
  expect(
    CurrencyToAbbreviation({
      inputNumber: 12551157689,
      inputLocale: 'de-DE',
      inputCurrencyCode: 'EUR',
      decimalPlacesToRound: 3,
      lowerCaseAbbreviation: true,
    }),
  ).toBe('€12,551b');
  //trillions tests
  expect(
    CurrencyToAbbreviation({
      inputNumber: 189745878989778.0978798798798798,
      inputLocale: 'en-US',
      inputCurrencyCode: 'USD',
    }),
  ).toBe('$189.7T');
  expect(
    CurrencyToAbbreviation({
      inputNumber: 1897458789789,
      inputLocale: 'en-US',
      inputCurrencyCode: 'USD',
      decimalPlacesToRound: 2,
    }),
  ).toBe('$1.90T');
  expect(
    CurrencyToAbbreviation({
      inputNumber: 1822458789789,
      inputLocale: 'en-US',
      inputCurrencyCode: 'USD',
      decimalPlacesToRound: 2,
    }),
  ).toBe('$1.82T');
  expect(
    CurrencyToAbbreviation({
      inputNumber: 18897458789789,
      // inputLocale: 'en-US',
      // inputCurrencyCode: 'USD',
      lowerCaseAbbreviation: true,
    }),
  ).toBe('$18.9t');
});
