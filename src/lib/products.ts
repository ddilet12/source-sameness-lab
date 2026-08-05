import comboHotbox from "@/assets/combo-hotbox.jpg";
import chicken from "@/assets/chicken.jpg";
import burger from "@/assets/burger.jpg";
import pizza from "@/assets/pizza.jpg";
import fries from "@/assets/fries.jpg";
import drinks from "@/assets/drinks.jpg";
import familyCombo from "@/assets/family-combo.jpg";
import hotdog from "@/assets/hotdog.jpg";
import twisterImg from "@/assets/twister.jpg";
import boxmasterImg from "@/assets/boxmaster.jpg";
import kidsBoxImg from "@/assets/kids-box.jpg";
import heroCombo from "@/assets/hero-combo.jpg";
import pizzaCezar from "@/assets/pizza-cezar.jpg";
import pizzaMargarita from "@/assets/pizza-margarita.jpg";
import pizzaPepperoni from "@/assets/pizza-pepperoni.jpg";
import pizzaMexicano from "@/assets/pizza-mexicano.jpg";
import pizza4Sezona from "@/assets/pizza-4-sezona.jpg";
import pizzaBolognese from "@/assets/pizza-bolognese.jpg";
import pizzaChickenMushroom from "@/assets/pizza-chicken-mushroom.jpg";
import cocaCola1l from "@/assets/drink-coca-cola-1l.jpg";
import cocaCola05l from "@/assets/drink-coca-cola-05l.jpg";
import cocaCola2l from "@/assets/drink-coca-cola-2l.jpg";
import sprite1l from "@/assets/drink-sprite-1l.jpg";
import sprite05l from "@/assets/drink-sprite-05l.jpg";
import fanta1l from "@/assets/drink-fanta-1l.jpg";
import fanta05l from "@/assets/drink-fanta-05l.jpg";
import fuzeMango05l from "@/assets/drink-fuze-mango-05l.jpg";
import fuzeMango1l from "@/assets/drink-fuze-mango-1l.jpg";
import fuzePeach05l from "@/assets/drink-fuze-peach-05l.jpg";
import fuzePeach1l from "@/assets/drink-fuze-peach-1l.jpg";
import fuzeChamomile05l from "@/assets/drink-fuze-chamomile-05l.jpg";
import fuzeChamomile1l from "@/assets/drink-fuze-chamomile-1l.jpg";
import pikoOrange09l from "@/assets/drink-piko-orange-09l.jpg";
import pikoApple09l from "@/assets/drink-piko-apple-09l.jpg";
import piko02l from "@/assets/drink-piko-02l.jpg";
import ayran03l from "@/assets/drink-ayran-03l.jpg";
import cocaColaDraft05l from "@/assets/drink-coca-cola-draft-05l.jpg";
import sauceCheese from "@/assets/sauce-cheese.jpg";
import sauceBbq from "@/assets/sauce-bbq.jpg";
import sauceKetchup from "@/assets/sauce-ketchup.jpg";

export const images = {
  comboHotbox,
  chicken,
  burger,
  pizza,
  fries,
  drinks,
  familyCombo,
  heroCombo,
  hotdog,
  twister: twisterImg,
  boxmaster: boxmasterImg,
  kidsBox: kidsBoxImg,
};

export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  items: string[];
};

export const categories = [
  { id: "all", name: "Барлық комбо" },
  { id: "combo", name: "Комболар" },
  { id: "pizza", name: "Пиццалар" },
  { id: "burger", name: "Бургерлер" },
  { id: "hotdog", name: "Хот-догтар" },
  { id: "tiskebasar", name: "Тіскебасар" },
  { id: "chicken", name: "Чикендер" },
  { id: "drinks", name: "Сусындар / Drinks" },
];

export const products: Product[] = [
  // ================= КОМБОЛАР =================
  {
    id: "kombo-friends",
    name: "КОМБО FRIENDS",
    price: 8790,
    category: "combo",
    image: comboHotbox,
    items: [
      "Қанаттар 15 дана",
      "Аяқтар 5 дана",
      "Coca-Cola 1 л",
      "Пицца Пепперони",
      "Фри M",
      "Соус 3 дана",
    ],
  },
  {
    id: "kombo-trio",
    name: "КОМБО TRIO",
    price: 8290,
    category: "combo",
    image: familyCombo,
    items: ["Қанаттар 15 дана", "Твистер 3 дана", "Coca-Cola 1 л", "Соус 2 дана"],
  },
  {
    id: "kombo-hot-box",
    name: "КОМБО HOT BOX",
    price: 9890,
    category: "combo",
    image: comboHotbox,
    items: [
      "Қанаттар 20 дана",
      "Пицца Пепперони",
      "Coca-Cola 2 л",
      "Фри M - 2 дана",
      "Соус 2 дана",
    ],
  },
  {
    id: "kombo-classic",
    name: "КОМБО CLASSIC",
    price: 10990,
    category: "combo",
    image: heroCombo,
    items: ["Пицца Маргарита", "Қанаттар 25 дана", "Coca-Cola 2 л", "Фри L", "Соус 2 дана"],
  },
  {
    id: "kombo-box",
    name: "КОМБО BOX",
    price: 6290,
    category: "combo",
    image: chicken,
    items: ["Қанаттар 10 дана", "Бокс Мастер 2 дана", "Coca-Cola 1 л", "Соус 2 дана"],
  },
  {
    id: "kids-box",
    name: "KIDS BOX",
    price: 3390,
    category: "combo",
    image: kidsBoxImg,
    items: ["Балалар бургері", "Фри M", "Сок 0,2 л", "Ойыншық"],
  },
  {
    id: "kombo-double",
    name: "КОМБО DOUBLE",
    price: 6290,
    category: "combo",
    image: burger,
    items: ["Double - 2 дана", "Фри M - 2 дана", "Coca-Cola 0,5 л - 2 дана", "Соус - 2 дана"],
  },
  {
    id: "kombo-premium",
    name: "КОМБО PREMIUM",
    price: 6490,
    category: "combo",
    image: heroCombo,
    items: [
      "Етпен бургер - 2 дана",
      "Стрипсы - 10 дана",
      "Coca-Cola 0,5 л - 2 дана",
      "Соус - 2 дана",
    ],
  },
  {
    id: "kombo-gold",
    name: "КОМБО GOLD",
    price: 12290,
    category: "combo",
    image: familyCombo,
    items: [
      "Қанаттар 25 дана",
      "Аяқтар 10 дана",
      "Фри L - 2 дана",
      "Coca-Cola 2 л",
      "Соус 3 дана",
    ],
  },
  {
    id: "kombo-ban-box",
    name: "КОМБО BAN BOX",
    price: 9790,
    category: "combo",
    image: comboHotbox,
    items: [
      "Бургер етпен - 2 дана",
      "Қанаттар 15 дана",
      "Пицца Пепперони",
      "Coca-Cola 2 л",
      "Соус - 2 дана",
    ],
  },
  {
    id: "kombo-plus",
    name: "КОМБО PLUS",
    price: 2990,
    category: "combo",
    image: burger,
    items: ["Бургер", "Coca-Cola 0,5 л", "Фри M", "Соус"],
  },
  {
    id: "kombo-boom",
    name: "КОМБО BOOM",
    price: 14550,
    category: "combo",
    image: heroCombo,
    items: ["Қанаттар 50 дана", "Пицца Пепперони", "Coca-Cola 2 л", "Соус 3 дана"],
  },

  // ================= ПИЦЦАЛАР =================
  {
    id: "pizza-cezar",
    name: "ЦЕЗАРЬ",
    price: 2590,
    category: "pizza",
    image: pizzaCezar,
    items: ["Пицца Цезарь"],
  },
  {
    id: "pizza-margarita",
    name: "МАРГАРИТА",
    price: 2290,
    category: "pizza",
    image: pizzaMargarita,
    items: ["Пицца Маргарита"],
  },
  {
    id: "pizza-pepperoni",
    name: "ПЕППЕРОНИ",
    price: 2690,
    category: "pizza",
    image: pizzaPepperoni,
    items: ["Пицца Пепперони"],
  },
  {
    id: "pizza-mexicano",
    name: "МЕКСИКАНО",
    price: 2590,
    category: "pizza",
    image: pizzaMexicano,
    items: ["Пицца Мексикано"],
  },
  {
    id: "pizza-4-sezona",
    name: "4 СЕЗОНА",
    price: 3290,
    category: "pizza",
    image: pizza4Sezona,
    items: ["Пицца 4 Сезона"],
  },
  {
    id: "pizza-bolognese",
    name: "БОЛОНЬЕЗЕ",
    price: 2890,
    category: "pizza",
    image: pizzaBolognese,
    items: ["Пицца Болоньезе"],
  },
  {
    id: "pizza-chicken-mushroom",
    name: "КУРИЦА С ГРИБАМИ",
    price: 2690,
    category: "pizza",
    image: pizzaChickenMushroom,
    items: ["Пицца Курица с грибами"],
  },

  // ================= БУРГЕРЛЕР =================
  {
    id: "burger-beef",
    name: "БУРГЕР ЕТПЕН",
    price: 1890,
    category: "burger",
    image: burger,
    items: ["Говяжий бургер"],
  },
  {
    id: "burger-chicken",
    name: "БУРГЕР ҚҰС ЕТІ",
    price: 1750,
    category: "burger",
    image: burger,
    items: ["Куриный бургер"],
  },
  {
    id: "burger-mix",
    name: "MIX БУРГЕР",
    price: 2350,
    category: "burger",
    image: burger,
    items: ["Mix бургер"],
  },
  {
    id: "burger-kids",
    name: "KIDS БУРГЕР",
    price: 1550,
    category: "burger",
    image: burger,
    items: ["Балалар бургері"],
  },
  {
    id: "burger-tropic",
    name: "ТРОПИЧЕСКИЙ БУРГЕР",
    price: 1690,
    category: "burger",
    image: burger,
    items: ["Тропический бургер"],
  },
  {
    id: "burger-double",
    name: "DOUBLE БУРГЕР",
    price: 2450,
    category: "burger",
    image: burger,
    items: ["Double бургер"],
  },
  {
    id: "twister",
    name: "ТВИСТЕР",
    price: 1590,
    category: "tiskebasar",
    image: twisterImg,
    items: ["Твистер"],
  },
  {
    id: "boxmaster",
    name: "BOXMASTER",
    price: 1890,
    category: "tiskebasar",
    image: boxmasterImg,
    items: ["Boxmaster"],
  },

  // ================= ХОТ-ДОГТАР =================
  {
    id: "hotdog-chicken",
    name: "ХОТ-ДОГ ҚҰС ЕТІ",
    price: 990,
    category: "hotdog",
    image: hotdog,
    items: ["Куриный хот-дог"],
  },
  {
    id: "hotdog-beef",
    name: "ХОТ-ДОГ ЕТПЕН",
    price: 990,
    category: "hotdog",
    image: hotdog,
    items: ["Говяжий хот-дог"],
  },
  {
    id: "hotdog-french",
    name: "ХОТ-ДОГ (ФРЕНЧ)",
    price: 990,
    category: "hotdog",
    image: hotdog,
    items: ["Френч хот-дог"],
  },

  // ================= ЧИКЕНДЕР =================
  {
    id: "wings-5",
    name: "ҚАНАТТАР 5 ДАНА",
    price: 2190,
    category: "chicken",
    image: chicken,
    items: ["Крылышки 5 дана"],
  },
  {
    id: "wings-10",
    name: "ҚАНАТТАР 10 ДАНА",
    price: 3390,
    category: "chicken",
    image: chicken,
    items: ["Крылышки 10 дана"],
  },
  {
    id: "wings-15",
    name: "ҚАНАТТАР 15 ДАНА",
    price: 4590,
    category: "chicken",
    image: chicken,
    items: ["Крылышки 15 дана"],
  },
  {
    id: "wings-20",
    name: "ҚАНАТТАР 20 ДАНА",
    price: 5390,
    category: "chicken",
    image: chicken,
    items: ["Крылышки 20 дана"],
  },
  {
    id: "wings-25",
    name: "ҚАНАТТАР 25 ДАНА",
    price: 6490,
    category: "chicken",
    image: chicken,
    items: ["Крылышки 25 дана"],
  },
  {
    id: "legs-1",
    name: "АЯҚТАР 1 ДАНА",
    price: 500,
    category: "chicken",
    image: chicken,
    items: ["Ножки 1 дана"],
  },
  {
    id: "legs-3",
    name: "АЯҚТАР 3 ДАНА",
    price: 1550,
    category: "chicken",
    image: chicken,
    items: ["Ножки 3 дана"],
  },
  {
    id: "legs-10",
    name: "АЯҚТАР 10 ДАНА",
    price: 4590,
    category: "chicken",
    image: chicken,
    items: ["Ножки 10 дана"],
  },
  {
    id: "strips-5",
    name: "СТРИПСЫ 5 ДАНА",
    price: 1690,
    category: "chicken",
    image: chicken,
    items: ["Стрипсы 5 дана"],
  },
  {
    id: "junior",
    name: "JUNIOR",
    price: 1590,
    category: "chicken",
    image: chicken,
    items: ["150 г", "Фри L"],
  },
  {
    id: "fries-l",
    name: "ФРИ L",
    price: 990,
    category: "chicken",
    image: fries,
    items: ["Үлкен порция"],
  },
  {
    id: "fries-m",
    name: "ФРИ M",
    price: 890,
    category: "chicken",
    image: fries,
    items: ["Орташа порция"],
  },

  // ================= СУСЫНДАР / DRINKS =================
  { id: "coca-cola-1l", name: "COCA-COLA 1 Л", price: 1000, category: "drinks", image: cocaCola1l, items: ["Пластик бөтелке, 1 л"] },
  { id: "coca-cola-05l", name: "COCA-COLA 0.5 Л", price: 500, category: "drinks", image: cocaCola05l, items: ["Пластик бөтелке, 0.5 л"] },
  { id: "coca-cola-2l", name: "COCA-COLA 2 Л", price: 1500, category: "drinks", image: cocaCola2l, items: ["Пластик бөтелке, 2 л"] },
  { id: "sprite-1l", name: "SPRITE 1 Л", price: 1000, category: "drinks", image: sprite1l, items: ["Пластик бөтелке, 1 л"] },
  { id: "sprite-05l", name: "SPRITE 0.5 Л", price: 500, category: "drinks", image: sprite05l, items: ["Пластик бөтелке, 0.5 л"] },
  { id: "fanta-1l", name: "FANTA 1 Л", price: 1000, category: "drinks", image: fanta1l, items: ["Пластик бөтелке, 1 л"] },
  { id: "fanta-05l", name: "FANTA 0.5 Л", price: 500, category: "drinks", image: fanta05l, items: ["Пластик бөтелке, 0.5 л"] },
  { id: "fuze-mango-05l", name: "FUZE TEA МАНГО 0.5 Л", price: 500, category: "drinks", image: fuzeMango05l, items: ["Манго дәмі, 0.5 л"] },
  { id: "fuze-mango-1l", name: "FUZE TEA МАНГО 1 Л", price: 1000, category: "drinks", image: fuzeMango1l, items: ["Манго дәмі, 1 л"] },
  { id: "fuze-peach-05l", name: "FUZE TEA ПЕРСИК 0.5 Л", price: 500, category: "drinks", image: fuzePeach05l, items: ["Шабдалы дәмі, 0.5 л"] },
  { id: "fuze-peach-1l", name: "FUZE TEA ПЕРСИК 1 Л", price: 1000, category: "drinks", image: fuzePeach1l, items: ["Шабдалы дәмі, 1 л"] },
  { id: "fuze-chamomile-05l", name: "FUZE TEA РОМАШКА 0.5 Л", price: 500, category: "drinks", image: fuzeChamomile05l, items: ["Түймедақ дәмі, 0.5 л"] },
  { id: "fuze-chamomile-1l", name: "FUZE TEA РОМАШКА 1 Л", price: 1000, category: "drinks", image: fuzeChamomile1l, items: ["Түймедақ дәмі, 1 л"] },
  { id: "piko-orange-09l", name: "PIKO АПЕЛЬСИН 0.9 Л", price: 1500, category: "drinks", image: pikoOrange09l, items: ["Апельсин шырыны, 0.9 л"] },
  { id: "piko-apple-09l", name: "PIKO ЯБЛОКО 0.9 Л", price: 1500, category: "drinks", image: pikoApple09l, items: ["Алма шырыны, 0.9 л"] },
  { id: "piko-02l", name: "PIKO 0.2 Л", price: 400, category: "drinks", image: piko02l, items: ["Шырын, 0.2 л"] },
  { id: "ayran-03l", name: "АЙРАН 0.3 Л", price: 450, category: "drinks", image: ayran03l, items: ["Салқын айран, 0.3 л"] },
  { id: "coca-cola-draft-05l", name: "РАЗЛИВНАЯ COCA-COLA 0.5 Л", price: 500, category: "drinks", image: cocaColaDraft05l, items: ["Құйылмалы сусын, 0.5 л"] },
];

export const formatPrice = (n: number) => `${n.toLocaleString("ru-RU").replace(/\u00A0/g, " ")} ₸`;

export const WHATSAPP_PHONE = "77088882029";
