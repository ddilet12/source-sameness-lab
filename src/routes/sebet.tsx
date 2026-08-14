import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, MapPin, Minus, Plus, X } from "lucide-react";
import { useCart } from "@/lib/cart";
import { formatPrice, WHATSAPP_PHONE } from "@/lib/products";
import { deliveryDistricts, getDistrictById, formatDeliveryPrice } from "@/lib/delivery";

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

function DistrictSelect({
  value,
  onChange,
}: {
  value: string | undefined;
  onChange: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = getDistrictById(value);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 rounded-lg border border-input bg-background px-3 py-2 text-left text-sm outline-none transition-colors focus:border-primary"
      >
        <span className="flex items-center gap-2 min-w-0">
          <MapPin className="size-4 shrink-0 text-primary" />
          <span className={selected ? "text-foreground" : "text-muted-foreground"}>
            {selected ? selected.name : "Выберите район"}
          </span>
        </span>
        <span className="flex items-center gap-2 shrink-0">
          {selected && (
            <span className="font-bold text-primary">{formatDeliveryPrice(selected.price)}</span>
          )}
          <ChevronDown
            className={`size-4 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </span>
      </button>

      {open && (
        <div className="absolute z-20 mt-1 w-full rounded-xl border border-border bg-card p-1 shadow-[var(--shadow-card)]">
          <ul role="listbox" className="max-h-64 overflow-auto">
            {deliveryDistricts.map((d) => (
              <li key={d.id} role="option" aria-selected={d.id === value}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(d.id);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                    d.id === value
                      ? "bg-primary/10 text-foreground"
                      : "hover:bg-accent"
                  }`}
                >
                  <span className="font-medium">{d.name}</span>
                  <span className="font-black text-primary">{formatDeliveryPrice(d.price)}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function CartPage() {
  const { items, setQty, remove, count, subtotal } = useCart();
  const [fulfillment, setFulfillment] = useState<"delivery" | "pickup">("delivery");
  const [address, setAddress] = useState("");
  const [districtId, setDistrictId] = useState<string | undefined>(undefined);
  const [error, setError] = useState("");

  // Clear validation error when user changes delivery inputs
  useEffect(() => {
    if (error) setError("");
  }, [address, districtId, fulfillment, error]);

  const delivery = fulfillment === "delivery" ? getDistrictById(districtId)?.price ?? 0 : 0;
  const finalTotal = subtotal + delivery;

  const order = () => {
    if (items.length === 0) {
      setError("Себет бос. Алдымен тағам таңдаңыз.");
      return;
    }
    if (fulfillment === "delivery") {
      if (!address.trim()) {
        setError("Пожалуйста, укажите адрес доставки.");
        return;
      }
      if (!districtId) {
        setError("Пожалуйста, выберите район доставки.");
        return;
      }
    }
    setError("");
    const district = getDistrictById(districtId);
    const fulfillmentLine = fulfillment === "delivery"
      ? `Жеткізу\n*Мекенжай (Адрес):* ${address.trim()}\n*Район:* ${district?.name}\n*Доставка:* ${district?.price}₸`
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
            <div className="space-y-3">
              <h3 className="text-xs font-black uppercase tracking-wide">Жеткізу мекенжайы</h3>
              <div className="space-y-1.5">
                <label htmlFor="delivery-address" className="text-xs font-semibold text-muted-foreground">
                  Введите адрес доставки
                </label>
                <input
                  id="delivery-address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Қала, көше, үй / пәтер"
                  className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-muted-foreground">Выберите район</label>
                <DistrictSelect value={districtId} onChange={setDistrictId} />
              </div>
            </div>
          )}

          <dl className="space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Сумма заказа</dt>
              <dd className="font-bold">{formatPrice(subtotal)}</dd>
            </div>
            {fulfillment === "delivery" && (
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Доставка</dt>
                <dd className="font-bold text-primary">
                  {getDistrictById(districtId) ? formatDeliveryPrice(delivery) : "—"}
                </dd>
              </div>
            )}
            <div className="flex justify-between border-t border-border pt-3 text-base">
              <dt className="font-black">Итого</dt>
              <dd className="font-black text-primary">{formatPrice(finalTotal)}</dd>
            </div>
          </dl>

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
