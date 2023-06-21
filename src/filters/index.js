import Vue from "vue";

Vue.filter("toCurrency", (value, currency) => {
  if (typeof value !== "number") {
    return value;
  }

  const minimumFractionDigits = currency === "CLP" ? 0 : 2;

  const formatter = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency,
    currencyDisplay: "code",
    minimumFractionDigits,
    useGrouping: true
  });
  return formatter.format(value);
});

Vue.filter("toPercentage", (value, minimumFractionDigits = 0) => {
  if (typeof value !== "number") {
    return value;
  }
  const formatter = new Intl.NumberFormat("es-ES", {
    style: "percent",
    minimumFractionDigits,
    maximumFractionDigits: 0
  });
  return formatter.format(value);
});
Vue.filter("toQuotaNumber", value => {
  if (typeof value !== "number") {
    return value;
  }

  const digits = value === 0 ? 0 : 4;

  const formatter = new Intl.NumberFormat("de-DE", {
    style: "decimal",
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
    minimumIntegerDigits: 1
  });
  return `${formatter.format(Math.round(value * 10000) / 10000)} cuotas`;
});

Vue.filter("toQuotas", value => {
  if (typeof value !== "number") {
    return value;
  }

  const digits = value === 0 ? 0 : 4;

  const formatter = new Intl.NumberFormat("de-DE", {
    style: "decimal",
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
    minimumIntegerDigits: 1
  });
  return formatter.format(Math.round(value * 10000) / 10000);
});

Vue.filter("currencyNoSymbol", (value, currency) => {
  if (typeof value !== "number") {
    return value;
  }

  const minimumFractionDigits = currency === "CLP" ? 0 : 2;

  const formatter = new Intl.NumberFormat("de-DE", {
    style: "decimal",
    minimumFractionDigits,
    useGrouping: true
  });
  return formatter.format(value);
});
