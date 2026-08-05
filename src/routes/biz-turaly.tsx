import { createFileRoute } from "@tanstack/react-router";
import { images } from "@/lib/products";

export const Route = createFileRoute("/biz-turaly")({
  head: () => ({
    meta: [
      { title: "Біз туралы — CHICO CHICKEN Жаңаөзен" },
      {
        name: "description",
        content:
          "CHICO CHICKEN — Жаңаөзендегі дәмді тағамдар мен жоғары сапалы қызмет көрсететін мейрамхана.",
      },
      { property: "og:title", content: "Біз туралы — CHICO CHICKEN" },
      { property: "og:description", content: "Дәмді тағам және жоғары сапалы қызмет." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="container-chico grid items-center gap-10 py-12 lg:grid-cols-2">
      <div>
        <h1 className="heading-xl text-3xl">Біз туралы</h1>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
          CHICO CHICKEN — бұл дәмді тағамдар мен жоғары сапалы қызмет. Біз әр клиентімізге жақсы
          көңіл-күй мен дәмді тағам сыйлауды мақсат тұтамыз.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Тек жаңа өнімдер, фирмалық рецепттер және жылдам жеткізу — біздің басты ұстанымымыз.
          Жаңаөзен қаласы бойынша тапсырысты 20-40 минут ішінде жеткіземіз.
        </p>
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          {[
            { v: "5000+", l: "Бақытты клиент" },
            { v: "20-40", l: "Минут жеткізу" },
            { v: "100%", l: "Сапа" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl bg-surface-warm p-4">
              <p className="text-xl font-black text-primary">{s.v}</p>
              <p className="text-[11px] font-semibold text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
      <img
        src={images.heroCombo}
        alt="CHICO CHICKEN тағамдары"
        loading="lazy"
        width={1280}
        height={1024}
        className="rounded-2xl border border-border bg-surface object-contain p-4"
      />
    </div>
  );
}
