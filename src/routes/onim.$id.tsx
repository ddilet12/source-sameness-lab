import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { formatPrice, products, type Product } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/onim/$id")({
  loader: ({ params }): { product: Product } => {
    const product = products.find((p) => p.id === params.id);
    if (!product) throw notFound();
    return { product };
  },

  head: ({ loaderData }) => {
    const name = loaderData?.product.name ?? "Өнім";
    return {
      meta: [
        { title: `${name} — CHICO CHICKEN` },
        {
          name: "description",
          content: `${name} — ${loaderData?.product.items.join(", ")}. Бағасы ${formatPrice(loaderData?.product.price ?? 0)}.`,
        },
        { property: "og:title", content: `${name} — CHICO CHICKEN` },
        { property: "og:description", content: loaderData?.product.items.join(", ") ?? "" },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData() as { product: Product };
  const { add } = useCart();
  const [qty, setQty] = useState(1);

  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);

  return (
    <div className="container-chico py-8">
      <nav className="text-xs text-muted-foreground">
        <Link to="/" className="hover:text-primary">
          Басты бет
        </Link>
        <span className="px-2">/</span>
        <Link to="/menu" className="hover:text-primary">
          Комбо
        </Link>
        <span className="px-2">/</span>
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="mt-6 grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface p-6">
          <img
            src={product.image}
            alt={product.name}
            width={1024}
            height={1024}
            className="mx-auto h-[360px] w-full object-contain"
          />
        </div>

        <div>
          <h1 className="heading-xl text-3xl">{product.name}</h1>
          <ul className="mt-5 space-y-1.5 text-sm text-muted-foreground">
            {product.items.map((i) => (
              <li key={i}>• {i}</li>
            ))}
          </ul>
          <p className="mt-6 text-3xl font-black text-primary">{formatPrice(product.price)}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-3 rounded-full border border-border px-3 py-2">
              <button
                aria-label="Азайту"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="text-muted-foreground hover:text-primary"
              >
                <Minus className="size-4" />
              </button>
              <span className="w-6 text-center text-sm font-bold">{qty}</span>
              <button
                aria-label="Көбейту"
                onClick={() => setQty((q) => q + 1)}
                className="text-muted-foreground hover:text-primary"
              >
                <Plus className="size-4" />
              </button>
            </div>
            <button
              onClick={() =>
                add(
                  {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                  },
                  qty,
                )
              }
              className="rounded-full bg-primary px-8 py-3 text-xs font-black uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
            >
              Себетке қосу
            </button>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="heading-xl text-xl">Сізге ұнауы мүмкін</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
