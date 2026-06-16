import { useEffect, useState, useRef } from 'react';
import { useInViewOnce } from '@/hooks/useInViewOnce';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
}

export default function AnimatedCounter({
  target,
  suffix = '',
  decimals = 0,
  duration = 2000,
}: AnimatedCounterProps) {
  const { ref, isInView } = useInViewOnce(0.3);
  const [value, setValue] = useState(0);
  const [showSuffix, setShowSuffix] = useState(false);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isInView) return;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(eased * target);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setValue(target);
        setTimeout(() => setShowSuffix(true), 100);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isInView, target, duration]);

  const displayValue = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();

  return (
    <div ref={ref} className="text-center">
      <span
        className="font-mono text-[56px] leading-tight"
        style={{ color: 'var(--accent)' }}
      >
        {displayValue}
        <span
          className="transition-opacity duration-300"
          style={{ opacity: showSuffix ? 1 : 0 }}
        >
          {suffix}
        </span>
      </span>
    </div>
  );
}
