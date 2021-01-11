export const popular = [
  { name: "iPhone", onClick: null },
  { name: "Huawei", onClick: null },
  { name: "Oneplus", onClick: null },
  { name: "Samsung", onClick: null },
  { name: "Xiaomi", onClick: null },
  { name: "Vivo", onClick: null },
];

export const brands = [
  { name: "Honor", onClick: null },
  { name: "HTC", onClick: null },
  { name: "Infinix", onClick: null },
  { name: "LG", onClick: null },
  { name: "Nokia", onClick: null },
  { name: "Oppo", onClick: null },
  { name: "Realme", onClick: null },
  { name: "Sony", onClick: null },
  { name: "Walton", onClick: null },
];

const popularItem = 6;
export const brands1 = brands.slice(0 * popularItem, 1 * popularItem);
export const brands2 = brands.slice(1 * popularItem, brands.length);
