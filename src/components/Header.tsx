import { Link } from "@tanstack/react-router";
import { ShoppingCart, Menu as MenuIcon } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/products";
import { Logo } from "./Logo";

const nav = [
  { to: "/", label: "Басты бет" },
  { to: "/menu", label: "Меню" },
  
  { to: "/jetkizu", label: "Жеткізу және төлем" },
  { to: "/biz-turaly", label: "Біз туралы" },
  { to: "/baylanys", label: "Байланыс" },
];

export function Header() {
  const { total } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="container-chico flex h-16 items-center justify-between gap-4">
        <Link to="/" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-[13px] font-semibold text-foreground/80 transition-colors hover:text-primary [&.active]:text-primary [&.active]:underline [&.active]:decoration-2 [&.active]:underline-offset-8"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/sebet"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <ShoppingCart className="size-4" />
            {formatPrice(total)}
          </Link>
          <button
            aria-label="Меню"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border lg:hidden"
          >
            <MenuIcon className="size-5" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background lg:hidden">
          <div className="container-chico flex flex-col py-2">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-semibold text-foreground/80 [&.active]:text-primary"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
