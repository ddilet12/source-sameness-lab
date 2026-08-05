import { Phone, Instagram, MapPin, Clock, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-16 bg-ink text-ink-foreground">
      <div className="container-chico grid gap-10 py-14 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo inverted />
          <p className="text-sm leading-relaxed text-ink-foreground/70">
            CHICO CHICKEN — бұл дәмді тағамдар мен жоғары сапалы қызмет. Біз әр клиентімізге жақсы
            көңіл-күй мен дәмді тағам сыйлауды мақсат тұтамыз.
          </p>
          <div className="flex gap-3">
            <a
              href="https://instagram.com/chico_chicken_ozen"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex size-9 items-center justify-center rounded-full border border-ink-foreground/20 transition-colors hover:bg-primary"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href="https://wa.me/77088882029"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="inline-flex size-9 items-center justify-center rounded-full border border-ink-foreground/20 transition-colors hover:bg-primary"
            >
              <MessageCircle className="size-4" />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-black uppercase tracking-widest">Байланыс</h3>
          <ul className="space-y-3 text-sm text-ink-foreground/80">
            <li className="flex items-center gap-3">
              <Phone className="size-4 text-primary" />
              <a href="tel:+77088882029">+7 708 888 2029</a>
            </li>
            <li className="flex items-center gap-3">
              <Instagram className="size-4 text-primary" />
              @chico_chicken_ozen
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-4 text-primary" />
              3-ші микрорайон, 33/1
            </li>
            <li className="flex items-center gap-3">
              <Clock className="size-4 text-primary" />
              11:00 - 04:00 (күн сайын)
            </li>
          </ul>
          <a
            href="https://wa.me/77088882029"
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full bg-primary px-5 py-2 text-xs font-black uppercase tracking-wider text-primary-foreground"
          >
            WhatsApp-қа жазу
          </a>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-black uppercase tracking-widest">Біздің мекенжайымыз</h3>
          <div className="relative overflow-hidden rounded-xl border border-ink-foreground/10 bg-[oklch(0.24_0_0)] p-8 text-center">
            <MapPin className="mx-auto size-6 text-primary" />
            <p className="mt-3 text-sm font-bold">3-ШІ МИКРОРАЙОН, 33/1</p>
            <p className="text-xs text-ink-foreground/70">ЖАҢАӨЗЕН, МАҢҒЫСТАУ ОБЛЫСЫ</p>
            <a
              href="https://2gis.kz/search/3%20микрорайон%2033%2F1%20Жаңаөзен"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex rounded-full bg-primary px-5 py-2 text-xs font-black uppercase tracking-wider text-primary-foreground"
            >
              Картадан көру
            </a>
          </div>
        </div>

        <div className="space-y-4 rounded-xl bg-primary p-6 text-primary-foreground">
          <h3 className="text-sm font-black uppercase leading-snug">
            Жаңалықтарды бірінші болып біліңіз
          </h3>
          <form
            className="flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              (e.currentTarget as HTMLFormElement).reset();
            }}
          >
            <input
              type="email"
              required
              placeholder="Email енгізіңіз"
              className="w-full rounded-full bg-background px-4 py-2 text-sm text-foreground outline-none"
            />
            <button className="rounded-full bg-ink px-4 py-2 text-xs font-black uppercase text-ink-foreground">
              Жазылу
            </button>
          </form>
        </div>

      </div>

      <div className="border-t border-ink-foreground/10 py-5 text-center text-xs text-ink-foreground/60">
        © 2024 CHICO CHICKEN. Барлық құқықтар қорғалған.
      </div>
    </footer>
  );
}
