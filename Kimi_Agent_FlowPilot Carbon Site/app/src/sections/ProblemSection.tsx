import { motion } from 'framer-motion';
import { Grid3X3, Clock, FileText, Users, XCircle, CheckCircle2 } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

const painPoints = [
  {
    icon: Grid3X3,
    title: 'Spreadsheet Chaos',
    description: 'Teams juggle dozens of spreadsheets with conflicting versions, broken formulas, and zero audit trail.',
  },
  {
    icon: Clock,
    title: 'Approval Bottlenecks',
    description: 'Critical decisions get stuck in email chains and Slack threads, delaying projects by days or weeks.',
  },
  {
    icon: FileText,
    title: 'Manual Reporting',
    description: 'Engineers and analysts spend 10+ hours/week building reports that could be generated automatically.',
  },
  {
    icon: Users,
    title: 'Cross-Team Silos',
    description: 'Different teams use different tools with no shared visibility, creating coordination nightmares.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function ProblemSection() {
  return (
    <section id="problem" style={{ backgroundColor: 'var(--light-bg)' }} className="py-section">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        <SectionHeader
          label="THE PROBLEM"
          title="The Hidden Cost of Manual Operations"
          subtitle="Most operations teams waste hundreds of hours every month on tasks that should be automated."
          light
        />

        {/* Pain Point Cards */}
        <div className="grid sm:grid-cols-2 gap-6 mt-component">
          {painPoints.map((point, i) => (
            <motion.div
              key={point.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-xl border p-card transition-all duration-300 hover:-translate-y-[3px]"
              style={{
                backgroundColor: 'var(--light-surface)',
                borderColor: 'var(--light-border)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F0F0EA';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--light-surface)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <point.icon size={28} style={{ color: 'var(--accent)' }} className="mb-4" />
              <h3 className="text-h3 mb-3" style={{ color: 'var(--light-text)' }}>{point.title}</h3>
              <p className="text-body-sm" style={{ color: '#555950' }}>{point.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Before / After Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-component rounded-xl border overflow-hidden"
          style={{ borderColor: 'var(--light-border)' }}
        >
          <div className="grid md:grid-cols-2">
            {/* Before */}
            <div className="p-8 lg:p-10" style={{ backgroundColor: '#EDE9E0' }}>
              <div className="flex items-center gap-3 mb-6">
                <XCircle size={24} style={{ color: '#C4402C' }} />
                <span className="text-label uppercase" style={{ color: '#8B8680' }}>Before</span>
              </div>
              <ul className="space-y-3">
                {[
                  '12+ hours/week on manual reporting',
                  '3-5 day approval cycles',
                  '15+ tools with no integration',
                  'Constant human errors',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-body-sm" style={{ color: '#555950' }}>
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: '#C4402C' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div className="hidden md:flex items-center justify-center relative" style={{ backgroundColor: '#EDE9E0' }}>
              <div className="absolute right-0 top-0 bottom-0 w-0.5" style={{ backgroundColor: 'var(--accent)' }} />
            </div>

            {/* After */}
            <div className="p-8 lg:p-10" style={{ backgroundColor: 'var(--surface)' }}>
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 size={24} style={{ color: 'var(--success)' }} />
                <span className="text-label uppercase" style={{ color: 'var(--success)' }}>After FlowPilot</span>
              </div>
              <ul className="space-y-3">
                {[
                  'Reports auto-generated in seconds',
                  'Approvals routed in minutes',
                  'Unified workflow platform',
                  '99.9% accuracy',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-body-sm" style={{ color: 'var(--text-primary)' }}>
                    <CheckCircle2 size={14} style={{ color: 'var(--success)' }} className="flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
