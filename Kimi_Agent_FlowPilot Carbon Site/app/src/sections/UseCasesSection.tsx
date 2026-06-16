import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

const useCases = [
  {
    label: 'OPERATIONS',
    title: 'Automate Recurring Workflows',
    description: 'From data entry to report generation, automate the repetitive tasks that slow your team down.',
    pattern: 'diagonal',
  },
  {
    label: 'FINANCE',
    title: 'Invoice Approvals & Reporting',
    description: 'Streamline approval hierarchies, auto-match invoices, and generate financial reports on demand.',
    pattern: 'dots',
  },
  {
    label: 'HUMAN RESOURCES',
    title: 'Employee Onboarding',
    description: 'Create consistent onboarding experiences with automated document collection, task assignment, and progress tracking.',
    pattern: 'grid',
  },
  {
    label: 'CUSTOMER SUCCESS',
    title: 'Ticket Routing & Escalations',
    description: 'Intelligently route support tickets, auto-escalate critical issues, and keep customers happy.',
    pattern: 'circles',
  },
];

function PatternOverlay({ pattern }: { pattern: string }) {
  const patterns: Record<string, React.CSSProperties> = {
    diagonal: {
      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(255,122,51,0.04) 8px, rgba(255,122,51,0.04) 10px)',
    },
    dots: {
      backgroundImage: 'radial-gradient(rgba(255,122,51,0.08) 1px, transparent 1px)',
      backgroundSize: '12px 12px',
    },
    grid: {
      backgroundImage: 'linear-gradient(rgba(255,122,51,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,122,51,0.05) 1px, transparent 1px)',
      backgroundSize: '16px 16px',
    },
    circles: {
      backgroundImage: 'radial-gradient(circle, rgba(255,122,51,0.05) 2px, transparent 2px)',
      backgroundSize: '20px 20px',
    },
  };

  return (
    <div
      className="absolute top-0 right-0 w-32 h-32 opacity-50"
      style={patterns[pattern] || patterns.diagonal}
    />
  );
}

export default function UseCasesSection() {
  return (
    <section id="use-cases" style={{ backgroundColor: 'var(--surface)' }} className="py-section">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        <SectionHeader label="USE CASES" title="Built for Operations Teams" />

        <div className="grid sm:grid-cols-2 gap-6 mt-component">
          {useCases.map((useCase, i) => (
            <motion.div
              key={useCase.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border p-card relative overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: 'var(--surface-hover)',
                borderColor: 'var(--border-color)',
                borderLeftWidth: '3px',
                borderLeftColor: 'var(--accent)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--card)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <PatternOverlay pattern={useCase.pattern} />
              <span className="text-label uppercase block mb-3" style={{ color: 'var(--accent)' }}>
                {useCase.label}
              </span>
              <h3 className="text-h3 mb-3" style={{ color: 'var(--text-primary)' }}>{useCase.title}</h3>
              <p className="text-body-sm mb-4" style={{ color: 'var(--text-secondary)' }}>{useCase.description}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium" style={{ color: 'var(--accent)' }}>
                Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
