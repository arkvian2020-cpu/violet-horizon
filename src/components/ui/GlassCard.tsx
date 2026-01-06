import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

const GlassCard = ({ children, className = "", hover = true, glow = false }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "relative bg-card/50 backdrop-blur-xl border border-border/50 rounded-xl p-6 transition-all duration-300",
        hover && "hover:border-primary/50 hover:bg-card/70 hover:-translate-y-1",
        glow && "shadow-[0_0_30px_rgba(124,58,237,0.1)] hover:shadow-[0_0_40px_rgba(124,58,237,0.2)]",
        className
      )}
    >
      {glow && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
      )}
      {children}
    </div>
  );
};

export default GlassCard;
