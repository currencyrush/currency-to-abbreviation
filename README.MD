
# currency-to-abbreviation
currency-to-abbreviation is a simple package for converting numbers to currency abbreviations. Example: 1000000 -> $1M

## Example


## CurrencyToAbbreviation Parameters

|Parameter | Required | Description/Defaults
| :--- | :--- | :--- |
|`inputNumber` | Yes | Must provide a valid number (typeof === "number")
|`inputLocale` | No | Optionally provide a valid local (`"en-US"`, `"de-DE"`, etc.). If a local is not provided it will attempt to find the user's locale using `Intl?.DateTimeFormat()?.resolvedOptions()?.locale`. Lastly, it defaults to `"en-US"`
|`inputCurrencyCode` | No | Optionally provide a valid currency code (`"USD"`, `"EUR"`, `"CAD"`, etc). Defaults to `"USD"` if a value is not provided or if the value is invalid.
|`decimalPlacesToRound` | No | Optionally provide the number of decimal places to round to (typeof === "number"). The default rounding varies by the `inputNumber` value. By default, `inputNumber` values < 1 round to 2 decimals, `inputNumber` values >= 1 && <100 round to 2 decimals, `inputNumber` values >= 100 && <1000 round to 0 decimals, and `inputNumber` values >= 1000 round to 1 decimal.
|`lowerCaseAbbreviation` | No | Optionally provide a boolean to determine whether the value abbreviation will be uppercase or lowercase. By default this value is false, meaning the value abbreviation will be uppercase (ex: `"€12,6M"`). If `true` is passed, the value abbreviation will be lowercase (ex: `"$18.9t"`).

### Opinionated Choices
This package was originally created for use by [CurrencyRush.com](https://currencyrush.com/) and it remains opinionated for our use case.

In the packages current form, the default handling of missing parameters meet our needs, but give little flexibility if your needs differ. We're unlikely to be interested in making changes to our opinionated choices, but feel free to fork the project or use the code as a jumping off point for your own needs.

However we are happy to be notified of any problems or errors experiences.

