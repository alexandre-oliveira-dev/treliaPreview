export function Logo({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <span className={`font-extrabold tracking-tight ${className}`}>
      <span className={light ? "text-white" : "text-brand-navy"}>Smart</span>
      <span className="text-brand-orange">odonto</span>
    </span>
  );
}
