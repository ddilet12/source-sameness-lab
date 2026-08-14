export type DeliveryDistrict = {
  id: string;
  name: string;
  price: number;
};

export const deliveryDistricts: DeliveryDistrict[] = [
  { id: "kala", name: "Қала", price: 600 },
  { id: "aray", name: "Арай", price: 1700 },
  { id: "aray2", name: "Арай 2", price: 800 },
  { id: "tenge", name: "Тенге", price: 1000 },
  { id: "atp", name: "АТП", price: 1000 },
  { id: "rahat1", name: "Рахат 1", price: 700 },
  { id: "rahat2", name: "Рахат 2", price: 800 },
  { id: "rahat3", name: "Рахат 3", price: 1000 },
  { id: "rahat4", name: "Рахат 4", price: 1200 },
];

export const getDistrictById = (id: string | undefined) =>
  deliveryDistricts.find((d) => d.id === id);

export const formatPrice = (n: number) =>
  `${n.toLocaleString("ru-RU").replace(/\u00A0/g, " ")} ₸`;
