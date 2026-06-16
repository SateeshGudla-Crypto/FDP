import { motion } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';

const investors = [
  { name: 'Y COMBINATOR', highlight: true },
  { name: 'SEQUOIA', highlight: false },
  { name: 'A16Z', highlight: false },
  { name: 'NEA', highlight: false },
];

export default function YCCredibilitySection() {
  return (
    <section id="yc" style={{ backgroundColor: 'var(--bg)' }} className="py-section">
      <div className="max-w-content mx-auto px-6 lg:px-12 text-center">
        {/* YC Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div
            className="w-20 h-20 mx-auto rounded-lg flex items-center justify-center mb-3"
            style={{ backgroundColor: '#FF6600' }}
          >
            <span className="text-white text-3xl font-bold font-sans">Y</span>
          </div>
          <span className="text-label uppercase" style={{ color: 'var(--text-primary)' }}>W25</span>
        </motion.div>

        <SectionHeader
          label="BACKED BY THE BEST"
          title="Backed by Y Combinator"
          subtitle="FlowPilot is backed by Y Combinator, the accelerator behind Airbnb, Stripe, Dropbox, and thousands of category-defining startups."
        />

        {/* Investor Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mt-component"
        >
          {investors.map((investor) => (
            <div
              key={investor.name}
              className="px-5 py-2.5 rounded transition-transform duration-150 hover:scale-105"
              style={{
                backgroundColor: investor.highlight ? '#FF6600' : 'var(--surface-hover)',
                border: investor.highlight ? 'none' : '1px solid var(--border-color)',
              }}
            >
              <span
                className="text-label uppercase"
                style={{ color: investor.highlight ? '#fff' : 'var(--text-primary)' }}
              >
                {investor.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-component max-w-[640px] mx-auto text-left rounded-r-lg p-6 lg:p-8"
          style={{
            backgroundColor: 'var(--surface)',
            borderLeft: '3px solid var(--accent)',
          }}
        >
          <p className="text-body italic mb-4" style={{ color: 'var(--text-secondary)' }}>
            &ldquo;FlowPilot represents exactly the kind of infrastructure company we love to back — solving a
            real, painful problem with elegant technology.&rdquo;
          </p>
          <span className="text-label uppercase" style={{ color: 'var(--text-muted)' }}>
            — Partner, Y Combinator
          </span>
        </motion.div>
      </div>
    </section>
  );
}
