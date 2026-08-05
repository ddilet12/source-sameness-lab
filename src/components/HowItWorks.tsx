import { UtensilsCrossed, ClipboardList, Bike } from "lucide-react";

const steps = [
  {
    icon: UtensilsCrossed,
    title: "1. Таңдаңыз",
    text: "Мәзірден өзіңізге ұнайтын тағамды таңдаңыз",
  },
  {
    icon: ClipboardList,
    title: "2. Тапсырыс беріңіз",
    text: "Деректеріңізді енгізіп, тапсырысты растаңыз",
  },
  {
    icon: Bike,
    title: "3. Жеткізу",
    text: "20-40 минут ішінде жеткізіп береміз",
  },
];

export function HowItWorks() {
  return (
    <section className="container-chico grid gap-6 py-14 lg:grid-cols-[1.6fr_1fr]">
      <div className="rounded-2xl border border-border bg-card p-8">
        <h2 className="heading-xl text-2xl">Тапсырыс беру қалай жұмыс істейді?</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.title} className="text-center">
              <div className="mx-auto flex size-14 items-center justify-center rounded-full border-2 border-primary/30 bg-accent">
                <s.icon className="size-6 text-primary" />
              </div>
              <h3 className="mt-4 text-sm font-black">{s.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center rounded-2xl bg-surface-warm p-8 text-center">
        <h3 className="text-sm font-black uppercase tracking-wide">Тез жеткізу</h3>
        <p className="mt-2 text-5xl font-black text-primary">20-40</p>
        <p className="text-sm font-bold">мин</p>
        <p className="mt-3 text-xs text-muted-foreground">Жаңаөзен қаласы бойынша</p>
      </div>
    </section>
  );
}
