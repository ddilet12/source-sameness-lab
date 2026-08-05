import { createFileRoute } from "@tanstack/react-router";
import { HowItWorks } from "@/components/HowItWorks";
import { PaymentsAndAdvantages } from "@/components/PaymentsAndAdvantages";

export const Route = createFileRoute("/jetkizu")({
  head: () => ({
    meta: [
      { title: "Жеткізу және төлем — CHICO CHICKEN" },
      {
        name: "description",
        content:
          "Жаңаөзен бойынша 20-40 минутта жеткізу. Қолма-қол, Kaspi QR, банк картасы және онлайн төлем.",
      },
      { property: "og:title", content: "Жеткізу және төлем — CHICO CHICKEN" },
      { property: "og:description", content: "20-40 минутта жеткізу, төлемнің 4 түрі." },
    ],
  }),
  component: DeliveryPage,
});

function DeliveryPage() {
  return (
    <div className="py-8">
      <div className="container-chico">
        <h1 className="heading-xl text-3xl">Жеткізу және төлем</h1>
      </div>
      <HowItWorks />
      <PaymentsAndAdvantages />
    </div>
  );
}
