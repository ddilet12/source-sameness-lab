import { createFileRoute } from "@tanstack/react-router";
import { Phone, Instagram, MapPin, Clock, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/baylanys")({
  head: () => ({
    meta: [
      { title: "Байланыс — CHICO CHICKEN телефон және мекенжай" },
      {
        name: "description",
        content:
          "CHICO CHICKEN байланыс: +7 708 888 2029, 3-ші микрорайон 33/1, Жаңаөзен. Жұмыс уақыты 11:00-04:00.",
      },
      { property: "og:title", content: "Байланыс — CHICO CHICKEN" },
      { property: "og:description", content: "Телефон, мекенжай және жұмыс уақыты." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="container-chico py-12">
      <h1 className="heading-xl text-3xl">Байланыс</h1>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Phone, title: "Телефон", value: "+7 708 888 2029" },
          { icon: Instagram, title: "Instagram", value: "@chico_chicken_ozen" },
          { icon: MapPin, title: "Мекенжай", value: "3-ші микрорайон, 33/1" },
          { icon: Clock, title: "Жұмыс уақыты", value: "11:00 - 04:00 (күн сайын)" },
        ].map((c) => (
          <div key={c.title} className="rounded-2xl border border-border bg-card p-6">
            <c.icon className="size-5 text-primary" />
            <p className="mt-3 text-xs font-black uppercase tracking-wide">{c.title}</p>
            <p className="mt-1 text-sm text-muted-foreground">{c.value}</p>
          </div>
        ))}
      </div>
      <a
        href="https://wa.me/77088882029"
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-black uppercase tracking-wider text-primary-foreground"
      >
        <MessageCircle className="size-4" /> WhatsApp-қа жазу
      </a>
    </div>
  );
}
