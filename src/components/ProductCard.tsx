import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { formatPrice, type Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const [liked, setLiked] = useState(false);

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-glow)]">
      <Link to="/onim/$id" params={{ id: product.id }} className="relative block bg-surface">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="h-44 w-full object-contain p-3 transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <Link
            to="/onim/$id"
            params={{ id: product.id }}
            className="text-sm font-black uppercase tracking-tight"
          >
            {product.name}
          </Link>
          <button
            aria-label="Таңдаулыға қосу"
            onClick={() => setLiked((v) => !v)}
            className="shrink-0 text-muted-foreground transition-colors hover:text-primary"
          >
            <Heart className={`size-4 ${liked ? "fill-primary text-primary" : ""}`} />
          </button>
        </div>
        <ul className="space-y-0.5 text-xs text-muted-foreground">
          {product.items.map((i) => (
            <li key={i}>• {i}</li>
          ))}
        </ul>
        <div className="mt-auto flex items-center justify-between gap-2 pt-2">
          <span className="text-lg font-black text-primary">{formatPrice(product.price)}</span>
          <button
            onClick={() =>
              add({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
              })
            }
            className="rounded-full bg-primary px-4 py-2 text-[11px] font-black uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
          >
            Себетке қосу
          </button>
        </div>
      </div>
    </div>
  );
}
