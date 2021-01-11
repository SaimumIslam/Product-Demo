export const watches = [
  { name: "Audemars Piguet", onClick: null },
  { name: "A. Lange & Söhne", onClick: null },
  { name: "Baume & Mercier", onClick: null },
  { name: "Breitling", onClick: null },
  { name: "Cartier", onClick: null },
  { name: "Chopard", onClick: null },
  { name: "Omega", onClick: null },
  { name: "Hublot", onClick: null },
  { name: "IWC", onClick: null },
  { name: "Jaeger-LeCoultre", onClick: null },
  { name: "Longines", onClick: null },
  { name: "Montblanc", onClick: null },
  { name: "Piaget", onClick: null },
  { name: "Panerai", onClick: null },
  { name: "Parmigiani Fleurier", onClick: null },
  { name: "Patek Philippe", onClick: null },
  { name: "Rolex", onClick: null },
  { name: "TAG Heuer", onClick: null },
  { name: "Tudor", onClick: null },
  { name: "Ulysse Nardin", onClick: null },
  { name: "Vacheron Constantin", onClick: null },
];

export const tremer = [
  { name: "Andis", onClick: null },
  { name: "Gillette", onClick: null },
  { name: "Hatteker", onClick: null },
  { name: "Oster", onClick: null },
  { name: "Philips", onClick: null },
  { name: "Panasonic", onClick: null },
  { name: "Remington", onClick: null },
  { name: "Wahl", onClick: null },
];

const item = 11;
export const watches1 = watches.slice(0 * item, 1 * item);
export const watches2 = watches.slice(1 * item, watches.length);
