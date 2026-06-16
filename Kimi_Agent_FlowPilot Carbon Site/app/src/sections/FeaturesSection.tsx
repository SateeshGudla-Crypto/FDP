import { motion } from 'framer-motion';
import { Sparkles, MousePointerClick, GitBranch, Cable, LineChart, ShieldCheck, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

const features = [
  {
    icon: Sparkles,
    title: 'AI Workflow Builder',
    description: 'Build automations using natural language. Describe what you want, and our AI constructs the workflow.',
  },
  {
    icon: MousePointerClick,
    title: 'No-Code Automation',
    description: 'No engineering resources required. Anyone on your team can build and modify workflows.',
  },
  {
    icon: GitBranch,
    title: 'Smart Approvals',
    description: 'AI-assisted decision workflows. Route approvals intelligently based on context and rules.',
  },
  {
    icon: Cable,
    title: 'Enterprise Integrations',
    description: 'Slack, Salesforce, HubSpot, Notion, Jira, Google Workspace, and 100+ more.',
  },
  {
    icon: LineChart,
    title: 'Advanced Analytics',
    description: 'Real-time workflow monitoring with custom dashboards and alerts.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Security',
    description: 'SOC 2, GDPR, SSO, audit logs, and granular permissions.',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" style={{ backgroundColor: 'var(--surface)' }} className="py-section">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        <SectionHeader label="FEATURES" title="Everything You Need to Automate" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-component">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border p-card relative group cursor-pointer transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: 'var(--surface-hover)',
                borderColor: 'var(--border-color)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 122, 51, 0.3)';
                e.currentTarget.style.boxShadow = 'var(--card-lg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl"
                style={{ backgroundColor: 'var(--accent)' }}
              />

              <feature.icon size={28} style={{ color: 'var(--accent)' }} className="mb-4" />
              <h4 className="text-h4 mb-3" style={{ color: 'var(--text-primary)' }}>{feature.title}</h4>
              <p className="text-body-sm mb-4" style={{ color: 'var(--text-secondary)' }}>{feature.description}</p>
              <span
                className="inline-flex items-center gap-1 text-sm font-medium transition-colors"
                style={{ color: 'var(--accent)' }}
              >
                Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
