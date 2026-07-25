export const currencyFormatter = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  maximumFractionDigits: 0,
});

export function formatNaira(value: number) {
  return currencyFormatter.format(value);
}

export function formatSamplePrice(
  value: number | null,
  fallback = "Enquiry only",
) {
  if (value === null) {
    return fallback;
  }
  return formatNaira(value);
}
