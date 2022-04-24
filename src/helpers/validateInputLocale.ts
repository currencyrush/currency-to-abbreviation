const validateInputLocale = (inputLocale?: string) => {
  try {
    let region = new Intl.DateTimeFormat(inputLocale);

    if (region.resolvedOptions().locale) {
      return region.resolvedOptions().locale;
    } else {
      try {
        inputLocale = Intl?.DateTimeFormat()?.resolvedOptions()?.locale;
        if (inputLocale) {
          return inputLocale;
        } else {
          return 'en-US';
        }
      } catch (err) {
        return 'en-US';
      }
    }
  } catch (err) {
    try {
      inputLocale = Intl?.DateTimeFormat()?.resolvedOptions()?.locale;
      if (inputLocale) {
        return inputLocale;
      } else {
        return 'en-US';
      }
    } catch (err) {
      return 'en-US';
    }
  }
};

export default validateInputLocale;
