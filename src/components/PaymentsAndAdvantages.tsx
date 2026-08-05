import { Wallet, QrCode, CreditCard, Globe, Flame, Utensils, Users } from "lucide-react";

const payments = [
  { icon: Wallet, label: "Қолма-қол" },
  { icon: QrCode, label: "Kaspi QR" },
  { icon: CreditCard, label: "Банк картасы" },
  { icon: Globe, label: "Онлайн төлем" },
];

const advantages = [
  { icon: Flame, value: "5000+", label: "Бақытты клиент" },
  { icon: Utensils, value: "3+", label: "Дәмді тағам" },
  { icon: Users, value: "", label: "Сіздермен бірге" },
];

export function PaymentsAndAdvantages() {
  return (
    <section className="container-chico grid gap-6 pb-14 lg:grid-cols-2">
      <div className="rounded-2xl border border-border bg-card p-8">
        <h3 className="text-sm font-black uppercase tracking-wide">Төлем түрлері</h3>
        <div className="mt-6 grid grid-cols-4 gap-4 text-center">
          {payments.map((p) => (
            <div key={p.label}>
              <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-accent">
                <p.icon className="size-5 text-primary" />
              </div>
              <p className="mt-2 text-[11px] font-semibold text-muted-foreground">{p.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-2xl border border-border bg-card p-8">
        <h3 className="text-sm font-black uppercase tracking-wide">Неліктен біз?</h3>
        <div className="mt-6 grid grid-cols-3 gap-4 text-center">
          {advantages.map((a) => (
            <div key={a.label}>
              <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-accent">
                <a.icon className="size-5 text-primary" />
              </div>
              <p className="mt-2 text-sm font-black text-primary">{a.value}</p>
              <p className="text-[11px] font-semibold text-muted-foreground">{a.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
