import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Search } from "lucide-react";
import { categories, products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Меню — CHICO CHICKEN комболары, бургерлер, пицца" },
      {
        name: "description",
        content:
          "CHICO CHICKEN мәзірі: комбо жиынтықтары, тауық еті, бургерлер, пиццалар, фри және сусындар.",
      },
      { property: "og:title", content: "CHICO CHICKEN мәзірі" },
      { property: "og:description", content: "Комбо, тауық еті, бургер, пицца, фри және сусындар." },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [active, setActive] = useState("all");
  const [query, setQuery] = useState("");
  const categoryProducts = active === "all" ? products : products.filter((p) => p.category === active);
  const normalizedQuery = query.trim().toLocaleLowerCase("ru-RU");
  const list = normalizedQuery
    ? categoryProducts.filter((p) =>
        [p.name, ...p.items].some((value) => value.toLocaleLowerCase("ru-RU").includes(normalizedQuery)),
      )
    : categoryProducts;

  return (
    <>
      <div className="container-chico py-8">
        <h1 className="heading-xl text-3xl">Меню</h1>
        <nav className="mt-2 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-primary">
            Басты бет
          </Link>
          <span className="px-2">/</span>
          <span className="text-foreground">Меню</span>
        </nav>

        <label className="mt-6 flex max-w-xl items-center gap-3 rounded-lg border border-input bg-background px-4 py-3 focus-within:border-primary">
          <Search className="size-4 text-muted-foreground" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Тағам немесе сусын іздеу"
            className="min-w-0 flex-1 bg-transparent text-sm outline-none"
          />
        </label>

        <div className="mt-8 grid gap-6 lg:grid-cols-[220px_1fr]">
          <aside className="h-max rounded-2xl border border-border bg-card p-3">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`block w-full rounded-full px-4 py-2.5 text-left text-xs font-bold transition-colors ${
                  active === c.id
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/80 hover:bg-accent"
                }`}
              >
                {c.name}
              </button>
            ))}
          </aside>

          <div className="grid content-start gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {list.length > 0 ? list.map((p) => <ProductCard key={p.id} product={p} />) : (
              <p className="text-sm text-muted-foreground sm:col-span-2 xl:col-span-4">Сұрауыңыз бойынша өнім табылмады.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
