export const bikes = [
  { name: "Aprilia", onClick: null },
  { name: "Bajaj", onClick: null },
  { name: "Bimota", onClick: null },
  { name: "Benelli", onClick: null },
  { name: "BMW", onClick: null },
  { name: "Cagiva", onClick: null },
  { name: "Ducati", onClick: null },
  { name: "Harley-Davidson", onClick: null },
  { name: "Hero", onClick: null },
  { name: "Honda", onClick: null },
  { name: "Indian", onClick: null },
  { name: "KTM", onClick: null },
  { name: "Royal Enfield", onClick: null },
  { name: "Runner", onClick: null },
  { name: "Suzuki", onClick: null },
  { name: "Triumph", onClick: null },
  { name: "Victory", onClick: null },
  { name: "Yahmah", onClick: null },
];

export const cars = [
  { name: "Audi", onClick: null },
  { name: "BMW", onClick: null },
  { name: "Chevrolet", onClick: null },
  { name: "Ford", onClick: null },
  { name: "Ferari", onClick: null },
  { name: "Honda", onClick: null },
  { name: "Lexus", onClick: null },
  { name: "Mazda", onClick: null },
  { name: "Tesla", onClick: null },
  { name: "Toyota", onClick: null },
];
const item = 11;
export const bikes1 = bikes.slice(0 * item, 1 * item);
export const bikes2 = bikes.slice(1 * item, bikes.length);
