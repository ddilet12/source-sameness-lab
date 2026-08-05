import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Sprout, Flame, Truck, ShieldCheck } from "lucide-react";
import { images, products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { HowItWorks } from "@/components/HowItWorks";
import { PaymentsAndAdvantages } from "@/components/PaymentsAndAdvantages";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CHICO CHICKEN — Дәмді комболар сен үшін | Жаңаөзен" },
      {
        name: "description",
        content:
          "Қытырлақ тауық еті, шырынды бургерлер, дәмді пицца және комболар. Жаңаөзен бойынша 20-40 минутта жеткізу.",
      },
      { property: "og:title", content: "CHICO CHICKEN — Дәмді комболар сен үшін" },
      {
        property: "og:description",
        content: "Онлайн тапсырыс беріңіз — 20-40 минутта жеткіземіз.",
      },
    ],
  }),
  component: Index,
});

const badges = [
  { icon: Sprout, title: "Тек жаңа өнімдер" },
  { icon: Flame, title: "Ыстық және дәмді" },
  { icon: Truck, title: "Жылдам жеткізу" },
  { icon: ShieldCheck, title: "100% сапа" },
];

const cats = [
  { name: "CHICKEN", sub: "Тауық еті", image: images.chicken },
  { name: "BURGER", sub: "Бургерлер", image: images.burger },
  { name: "PIZZA", sub: "Пиццалар", image: images.pizza },
  { name: "COMBO", sub: "Комбо", image: images.comboHotbox },
  { name: "FRIES", sub: "Картопа фри", image: images.fries },
  { name: "DRINKS", sub: "Сусындар", image: images.drinks },
];

function Index() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="container-chico grid items-center gap-8 py-14 lg:grid-cols-2">
          <div>
            <h1 className="heading-xl text-4xl sm:text-6xl">
              <span className="block text-ink">ДӘМДІ</span>
              <span className="block">КОМБОЛАР</span>
              <span className="block text-ink">СЕН ҮШІН!</span>
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed opacity-95">
              Қытырлақ тауық еті, шырынды бургерлер, дәмді пицца және басқа да дәмді комболар!
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-xs font-black uppercase tracking-wider text-primary"
              >
                Онлайн тапсырыс <ArrowRight className="size-4" />
              </Link>
              <a
                href="https://wa.me/77088882029"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground px-6 py-3 text-xs font-black uppercase tracking-wider"
              >
                <MessageCircle className="size-4" /> WhatsApp
              </a>
            </div>
          </div>
          <img
            src={images.heroCombo}
            alt="CHICO CHICKEN комбо жиынтығы"
            width={1280}
            height={1024}
            className="mx-auto w-full max-w-xl rounded-2xl object-contain"
          />
        </div>
      </section>

      <section className="container-chico grid grid-cols-2 gap-4 py-8 sm:grid-cols-4">
        {badges.map((b) => (
          <div key={b.title} className="flex items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent">
              <b.icon className="size-4 text-primary" />
            </div>
            <span className="text-xs font-bold leading-tight">{b.title}</span>
          </div>
        ))}
      </section>

      <section className="container-chico grid grid-cols-2 gap-4 pb-10 sm:grid-cols-3 lg:grid-cols-6">
        {cats.map((c) => (
          <Link
            key={c.name}
            to="/menu"
            className="group rounded-2xl border border-border bg-card p-4 text-center shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-glow)]"
          >
            <img
              src={c.image}
              alt={c.sub}
              loading="lazy"
              width={1024}
              height={1024}
              className="mx-auto h-24 w-full object-contain transition-transform group-hover:scale-105"
            />
            <p className="mt-3 text-xs font-black uppercase">{c.name}</p>
            <p className="text-[11px] text-muted-foreground">{c.sub}</p>
            <span className="mt-2 inline-flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <ArrowRight className="size-3" />
            </span>
          </Link>
        ))}
      </section>

      <section className="bg-surface py-12">
        <div className="container-chico">
          <h2 className="heading-xl text-2xl">Танымал комболар</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      
      <HowItWorks />
      <PaymentsAndAdvantages />
    </>
  );
}
