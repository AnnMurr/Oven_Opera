export function getFormatCurrency(price) {
  const euro = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
  });

  return euro.format(price);
}
