import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const STATS = [
  { value: 2400,  suffix: '+',  label: 'Agencies Listed'   },
  { value: 18000, suffix: '+',  label: 'Properties Listed' },
  { value: 32,    suffix: '+',  label: 'Cities Covered'    },
  { value: 4.8,   suffix: '★', label: 'Avg Rating', decimals: 1 },
];

function AnimatedCounter({ target, suffix, decimals = 0 }: { target: number; suffix: string; decimals?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const raf = (now: number) => {
      const t = Math.min((now - start) / 1800, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setVal(parseFloat((ease * target).toFixed(decimals)));
      if (t < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [inView, target, decimals]);
  return <span ref={ref}>{decimals > 0 ? val.toFixed(decimals) : Math.round(val).toLocaleString()}{suffix}</span>;
}

const StatsSection = () => (
  <section className="stats-section">
    <div className="stats-container">
      {STATS.map((s, i) => (
        <motion.div key={s.label} className="stats-item"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}>
          <div className="stats-number">
            <AnimatedCounter target={s.value} suffix={s.suffix} decimals={s.decimals} />
          </div>
          <div className="stats-label">{s.label}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default StatsSection;
