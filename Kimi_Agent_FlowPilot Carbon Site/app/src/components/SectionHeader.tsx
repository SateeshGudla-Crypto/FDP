import { motion } from 'framer-motion';

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
}

export default function SectionHeader({ label, title, subtitle, light = false, centered = true }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
      className={centered ? 'text-center' : ''}
    >
      <span
        className="text-label uppercase inline-block mb-4"
        style={{ color: 'var(--accent)' }}
      >
        {label}
      </span>
      <h2
        className="text-h2 mb-4"
        style={{ color: light ? 'var(--light-text)' : 'var(--text-primary)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-body max-w-[560px]"
          style={{
            color: light ? '#555950' : 'var(--text-secondary)',
            margin: centered ? '0 auto' : undefined,
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
