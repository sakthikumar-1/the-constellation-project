import { useEffect, useMemo } from "react";

const FloatingParticles = ({ count = 20, colors = ["gold", "purple"] }: { count?: number; colors?: string[] }) => {
  const particles = useMemo(() => 
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 15,
      duration: 10 + Math.random() * 15,
      size: 2 + Math.random() * 4,
      color: colors[i % colors.length],
    })),
    [count, colors]
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            width: p.size,
            height: p.size,
            background: p.color === "gold" ? "hsl(42 90% 63%)" : "hsl(275 30% 75%)",
            opacity: 0.4,
            animation: `particle-rise ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
