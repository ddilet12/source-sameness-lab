# Pixel Perfect Chicken

Clone the EXACT website layout, typography, and visual components shown in the attached reference image for "CHICO CHICKEN". Do not add extra features or change the layout structure. Build it pixel-perfect to the screenshots.

### 1. Visual Style & Color Scheme (Strict Match)

- **Primary Color:** Bright Brand Orange (#FF5D00 / #FF5722) for CTA buttons, cart badges, accents, and discount banners.

- **Backgrounds:** Pure White (#FFFFFF) and Warm Light Gray (#F9FAFB) for sections; Solid Black (#000000 / #111111) for the main footer block.

- **Typography:** Bold sans-serif headers with all Kazakh texts preserved exactly as shown on the images (e.g., "ДӘМДІ КОМБОЛАР СЕН ҮШІН!", "СЕБЕТ", "ТАПСЫРЫС БЕРУ").

### 2. Page Sections to Replicate (1:1 Layout)

Replicate all sections from the 6 panels in the reference:

1. **Header & Navigation Bar:**

   - Left: CHICO CHICKEN logo with chicken icon.

   - Middle menu links: Басты бет | Меню | Акциялар | Жеткізу және төлем | Біз туралы | Байланыс

   - Right: Orange Cart button displaying current total ("🛒 0 ₸").

2. **Hero Banner Section (Top-Left Screenshot):**

   - Big bold title: "ДӘМДІ КОМБОЛАР СЕН ҮШІН!"

   - Subtitle: "Қытырлақ тауық еті, шырынды бургерлер, дәмді пицца және басқа да дәмді комболар!"

   - Buttons: Orange "ОНЛАЙН ТАПСЫРЫС →" and white border "WHATSAPP".

   - 4 Icon badges below: "Тек жаңа өнімдер", "Өстік және дәмді", "Жылдам жеткізу", "100% сапа".

   - Category Selector Bar below Hero: Icon cards for (CHICKEN, BURGER, PIZZA, COMBO, FRIES, DRINKS).

3. **Menu Grid Section (Top-Middle Screenshot):**

   - Left Sidebar: Category list (Барлық комбо, Комбо, Тауық еті, Бургерлер, Пиццалар, Фри және снектер, Сусындар, Соустар).

   - Right Product Grid: 2-column grid showing items with images, title, list of ingredients, price tag (e.g., "8790 ₸"), heart icon, and orange "СЕБЕТКЕ ҚОСУ" button.

   - Bottom Orange Banner: "ҮЛКЕН ТАПСЫРЫС? Арнайы жеңілдіктер мен жеке ұсыныстар!" with "БАЙЛАНЫСУ" button.

4. **Product Detail View (Top-Right Screenshot):**

   - Big image on left, detailed info on right ("KOMBO HOT BOX", item list, price "9890 ₸", counter [- 1 +], and "СЕБЕТКЕ ҚОСУ" button).

   - "Сізге ұнауы мүмкін" (You may like) recommendations grid below.

5. **Promotions Page / Section (Bottom-Left Screenshot):**

   - Promo cards: "КОМБО №1" (2490 ₸), "ОТБАСЫЛЫҚ КОМБО" (5990 ₸), "ПИЦЦА МЕН КОЛА" (4290 ₸).

   - Promo code box at bottom: "ОНЛАЙН ТАПСЫРЫС БЕР ДЕ ЖЕҢІЛДІК АЛ!" with input code "CHICO10" (-10%).

6. **How It Works & Info (Bottom-Middle Screenshot):**

   - Steps: 1. Таңдаңыз -> 2. Тапсырыс беріңіз -> 3. Жеткізу (20-40 мин).

   - Payment types icons (Қолма-қол, Kaspi QR, Банк картасы, Онлайн төлем).

   - Advantages section ("Неліктен біз?").

7. **Cart Page / Drawer (Bottom-Right Screenshot) - CORE FUNCTION:**

   - Table of selected items with thumbnail, title, price, quantity counter [- 1 +], and delete [X] button.

   - Summary sidebar ("Тапсырыс қорытындысы"):

     * 3 тауар

     * Жалпы сумма: 24470 ₸

     * Жеткізу: 0 ₸

     * Жеңілдік: -2447 ₸

     * Барлығы: 22023 ₸

   - **Delivery Address Input Field** (Must be filled before ordering: City, Street, House/Apartment).

   - Big Orange Button: **"ТАПСЫРЫС БЕРУ"**.

8. **Footer (Bottom Panel):**

   - Dark background. Contacts (+7 708 868 20 29, Instagram, Address: 3-ші микрорайон, 33/1, Working hours: 11:00 - 04:00), Map embed, Newsletter form.

### 3. Strict WhatsApp Ordering Logic

When the user clicks the **"ТАПСЫРЫС БЕРУ"** button inside the Cart:

1. Validate that items are in the cart and the Delivery Address is entered.

2. Form a formatted text message:

   ---

   *ТАПСЫРЫС (CHICO CHICKEN)*

   

   *Тауарлар:*

   • [Quantity]x [Item Name] — [Price]₸

   

   *Барлығы:* [Total Price]₸

   *Мекенжай (Адрес):* [User Input Address]

   ---

3. Open WhatsApp link dynamically: `https://wa.me/77088682029?text=ENCODED_MESSAGE`

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e6ff45f8-02fa-45bb-90cc-a07e990a2a93).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
