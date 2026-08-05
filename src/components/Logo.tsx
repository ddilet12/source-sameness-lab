import logo from "@/assets/chico-logo.png";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <img
      src={logo}
      alt="CHICO CHICKEN логотипі"
      width={2984}
      height={1743}
      className={`h-10 w-auto object-contain ${inverted ? "drop-shadow-[0_0_1px_rgba(255,255,255,0.4)]" : ""}`}
    />
  );
}
