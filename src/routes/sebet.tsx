import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Minus, Plus, X } from "lucide-react";
import { useCart } from "@/lib/cart";
import { formatPrice, WHATSAPP_PHONE } from "@/lib/products";

export const Route = createFileRoute("/sebet")({
  head: () => ({
    meta: [
      { title: "Себет — CHICO CHICKEN тапсырысы" },
      {
        name: "description",
        content:
          "Себетіңізді тексеріп, мекенжайыңызды енгізіңіз және WhatsApp арқылы тапсырыс беріңіз.",
      },
      { property: "og:title", content: "Себет — CHICO CHICKEN" },
      { property: "og:description", content: "Тапсырысты WhatsApp арқылы растаңыз." },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { items, setQty, remove, count, subtotal } = useCart();
  const [fulfillment, setFulfillment] = useState<"delivery" | "pickup">("delivery");
  const [city, setCity] = useState("Жаңаөзен");
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");
  const [error, setError] = useState("");
  const deliveryFee = fulfillment === "delivery" ? 500 : 0;
  const finalTotal = subtotal + deliveryFee;

  const order = () => {
    if (items.length === 0) {
      setError("Себет бос. Алдымен тағам таңдаңыз.");
      return;
    }
    if (fulfillment === "delivery" && (!city.trim() || !street.trim() || !house.trim())) {
      setError("Жеткізу мекенжайын толық енгізіңіз (қала, көше, үй/пәтер).");
      return;
    }
    setError("");
    const fulfillmentLine = fulfillment === "delivery"
      ? `Жеткізу — 500₸\n*Мекенжай (Адрес):* ${city.trim()}, ${street.trim()}, ${house.trim()}`
      : "Алып кету / Самовывоз";
    const lines = items.map((i) => `• ${i.qty}x ${i.name} — ${i.price * i.qty}₸`).join("\n");
    const message = `*ТАПСЫРЫС (CHICO CHICKEN)*\n\n*Тауарлар:*\n${lines}\n\n${fulfillmentLine}\n*Барлығы:* ${finalTotal}₸`;
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="container-chico py-8">
      <h1 className="heading-xl text-3xl">Себет</h1>
      <nav className="mt-2 text-xs text-muted-foreground">
        <Link to="/" className="hover:text-primary">
          Басты бет
        </Link>
        <span className="px-2">/</span>
        <span className="text-foreground">Себет</span>
      </nav>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <div className="rounded-2xl border border-border bg-card p-4">
          {items.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-sm text-muted-foreground">Себет бос</p>
              <Link
                to="/menu"
                className="mt-4 inline-flex rounded-full bg-primary px-6 py-2.5 text-xs font-black uppercase tracking-wider text-primary-foreground"
              >
                Мәзірге өту
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-border">
              {items.map((i) => (
                <li key={i.id} className="flex items-center gap-4 py-4">
                  <img
                    src={i.image}
                    alt={i.name}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="size-16 rounded-xl bg-surface object-contain p-1"
                  />
                  <span className="flex-1 text-xs font-black uppercase">{i.name}</span>
                  <span className="w-24 text-right text-sm font-black text-primary">
                    {formatPrice(i.price)}
                  </span>
                  <div className="flex items-center gap-2 rounded-full border border-border px-2 py-1">
                    <button
                      aria-label="Азайту"
                      onClick={() => setQty(i.id, i.qty - 1)}
                      className="text-muted-foreground hover:text-primary"
                    >
                      <Minus className="size-3.5" />
                    </button>
                    <span className="w-5 text-center text-xs font-bold">{i.qty}</span>
                    <button
                      aria-label="Көбейту"
                      onClick={() => setQty(i.id, i.qty + 1)}
                      className="text-muted-foreground hover:text-primary"
                    >
                      <Plus className="size-3.5" />
                    </button>
                  </div>
                  <button
                    aria-label="Жою"
                    onClick={() => remove(i.id)}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <X className="size-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <aside className="h-max space-y-4 rounded-2xl border border-border bg-card p-6">
          <h2 className="text-sm font-black uppercase tracking-wide">Тапсырыс қорытындысы</h2>
          <p className="text-xs text-muted-foreground">{count} тауар</p>

          <div className="grid grid-cols-2 rounded-lg border border-border p-1" aria-label="Тапсырысты алу тәсілі">
            <button
              type="button"
              onClick={() => setFulfillment("delivery")}
              className={`rounded-md px-3 py-2 text-xs font-bold transition-colors ${fulfillment === "delivery" ? "bg-primary text-primary-foreground" : "hover:bg-accent"}`}
            >
              Жеткізу
            </button>
            <button
              type="button"
              onClick={() => setFulfillment("pickup")}
              className={`rounded-md px-3 py-2 text-xs font-bold transition-colors ${fulfillment === "pickup" ? "bg-primary text-primary-foreground" : "hover:bg-accent"}`}
            >
              Самовывоз
            </button>
          </div>

          {fulfillment === "delivery" && (
            <p className="rounded-lg bg-accent p-3 text-xs font-semibold leading-relaxed">
              🚚 Стоимость доставки составляет 500 ₸ и автоматически добавлена к вашему заказу.
            </p>
          )}

          <dl className="space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Жалпы сумма</dt>
              <dd className="font-bold">{formatPrice(subtotal)}</dd>
            </div>
            {fulfillment === "delivery" && (
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Доставка</dt>
                <dd className="font-bold">500 ₸</dd>
              </div>
            )}
            <div className="flex justify-between border-t border-border pt-3 text-base">
              <dt className="font-black">Барлығы</dt>
              <dd className="font-black text-primary">{formatPrice(finalTotal)}</dd>
            </div>
          </dl>

          {fulfillment === "delivery" && <div className="space-y-2">
            <h3 className="text-xs font-black uppercase tracking-wide">Жеткізу мекенжайы</h3>
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Қала"
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            />
            <input
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              placeholder="Көше / микрорайон"
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            />
            <input
              value={house}
              onChange={(e) => setHouse(e.target.value)}
              placeholder="Үй / пәтер"
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            />
          </div>}

          {error && <p className="text-xs font-semibold text-destructive">{error}</p>}

          <button
            onClick={order}
            className="w-full rounded-full bg-primary py-3 text-xs font-black uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
          >
            Тапсырыс беру
          </button>

        </aside>
      </div>
    </div>
  );
}
