import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

const faqs = [
  {
    question: 'How long does setup take?',
    answer: "Most teams are up and running within 30 minutes. Our no-code builder means you don't need engineers or IT support to get started. Connect your tools, build your first workflow, and see results immediately.",
  },
  {
    question: 'What integrations are supported?',
    answer: 'FlowPilot integrates with 100+ enterprise tools including Slack, Salesforce, HubSpot, Notion, Jira, Google Workspace, Microsoft 365, Stripe, Zendesk, and more. We also offer a REST API and webhook support for custom integrations.',
  },
  {
    question: 'Is coding required?',
    answer: 'Not at all. FlowPilot is designed for non-technical users. You can build complex automations using our visual workflow builder and natural language AI. However, developers can extend functionality using our API and custom code nodes if needed.',
  },
  {
    question: 'How secure is the platform?',
    answer: 'FlowPilot is SOC 2 Type II certified and GDPR compliant. We offer SSO (SAML 2.0 and OIDC), granular role-based permissions, full audit logs, and data encryption at rest and in transit. Enterprise customers can also request on-premise deployment.',
  },
  {
    question: 'Can enterprise customers self-host?',
    answer: 'Yes. Our Enterprise plan includes an on-premise deployment option for organizations with strict data residency requirements. Contact our sales team to discuss your specific needs.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" style={{ backgroundColor: 'var(--bg)' }} className="py-section">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        <SectionHeader label="FAQ" title="Frequently Asked Questions" />

        <div className="max-w-[800px] mx-auto mt-component space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-lg border overflow-hidden"
              style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border-color)' }}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors"
                style={{ color: 'var(--text-primary)' }}
                onMouseEnter={(e) => {
                  if (openIndex !== i) e.currentTarget.style.backgroundColor = 'var(--surface-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <span className="text-h4 pr-4">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className="flex-shrink-0 transition-transform duration-300"
                  style={{
                    color: openIndex === i ? 'var(--accent)' : 'var(--text-muted)',
                    transform: openIndex === i ? 'rotate(180deg)' : undefined,
                  }}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <div className="px-6 pb-5">
                      <p className="text-body" style={{ color: 'var(--text-secondary)' }}>
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
