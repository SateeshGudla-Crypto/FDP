import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import { useContactModal } from '@/components/ContactModal';

const plans = [
  {
    name: 'Starter',
    price: '$49',
    period: '/month',
    description: 'For small teams getting started with automation.',
    features: [
      'Up to 10 workflows',
      '5 team members',
      'Basic integrations',
      'Email support',
      'Community access',
    ],
    highlighted: false,
    cta: 'Start Free Trial',
  },
  {
    name: 'Growth',
    price: '$149',
    period: '/month',
    description: 'For scaling companies.',
    features: [
      'Unlimited workflows',
      '25 team members',
      'Advanced AI features',
      'Priority support',
      'Custom integrations',
      'SSO & advanced security',
    ],
    highlighted: true,
    cta: 'Start Free Trial',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations with complex needs.',
    features: [
      'Everything in Growth',
      'Unlimited team members',
      'Dedicated success manager',
      'Custom SLA',
      'On-premise deployment option',
      'Advanced audit & compliance',
    ],
    highlighted: false,
    cta: 'Contact Sales',
  },
];

export default function PricingSection() {
  const { open } = useContactModal();

  return (
    <section id="pricing" style={{ backgroundColor: 'var(--surface)' }} className="py-section">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        <SectionHeader label="PRICING" title="Simple, Transparent Pricing" />

        <div className="grid md:grid-cols-3 gap-6 mt-component">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-xl border overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: plan.highlighted ? 'var(--surface)' : 'var(--surface-hover)',
                borderColor: plan.highlighted ? 'var(--accent)' : 'var(--border-color)',
                borderWidth: plan.highlighted ? '2px' : '1px',
                order: plan.highlighted && window.innerWidth < 768 ? -1 : undefined,
              }}
              onMouseEnter={(e) => {
                if (!plan.highlighted) e.currentTarget.style.boxShadow = 'var(--card)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Most Popular Banner */}
              {plan.highlighted && (
                <div
                  className="text-center py-2 text-label uppercase"
                  style={{ backgroundColor: 'var(--accent)', color: '#fff' }}
                >
                  Most Popular
                </div>
              )}

              {/* Highlighted bg glow */}
              {plan.highlighted && (
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ backgroundColor: 'var(--accent-glow)' }}
                />
              )}

              <div className="relative p-8 lg:p-10">
                <h3 className="text-h3 mb-2" style={{ color: 'var(--text-primary)' }}>{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="font-mono text-5xl" style={{ color: 'var(--text-primary)' }}>{plan.price}</span>
                  {plan.period && (
                    <span className="text-body-sm" style={{ color: 'var(--text-muted)' }}>{plan.period}</span>
                  )}
                </div>
                <p className="text-body-sm mb-6" style={{ color: 'var(--text-secondary)' }}>{plan.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check size={18} style={{ color: 'var(--success)' }} className="flex-shrink-0 mt-0.5" />
                      <span className="text-body-sm" style={{ color: 'var(--text-primary)' }}>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={open}
                  className="w-full py-3 rounded-lg font-semibold text-[15px] transition-all duration-150 hover:-translate-y-px active:translate-y-0"
                  style={{
                    backgroundColor: plan.highlighted ? 'var(--accent)' : 'transparent',
                    color: plan.highlighted ? '#fff' : 'var(--text-primary)',
                    border: plan.highlighted ? 'none' : '1px solid var(--border-color)',
                  }}
                  onMouseEnter={(e) => {
                    if (plan.highlighted) {
                      e.currentTarget.style.backgroundColor = 'var(--accent-hover)';
                    } else {
                      e.currentTarget.style.backgroundColor = 'var(--surface)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (plan.highlighted) {
                      e.currentTarget.style.backgroundColor = 'var(--accent)';
                    } else {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
