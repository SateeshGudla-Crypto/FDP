import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

const testimonials = [
  {
    quote: 'FlowPilot eliminated 90% of our manual onboarding tasks. What used to take our HR team 3 days now completes automatically in under 2 hours.',
    name: 'Sarah Chen',
    title: 'VP Operations at TechFlow',
    initials: 'SC',
  },
  {
    quote: 'We evaluated 5 workflow tools. FlowPilot was the only one our non-technical team could actually build automations with — no engineers required.',
    name: 'Marcus Johnson',
    title: 'Director of IT at Atlas Corp',
    initials: 'MJ',
  },
  {
    quote: 'The AI approval routing cut our decision cycles from 5 days to same-day. Our executives love the visibility, and our teams love the speed.',
    name: 'Priya Sharma',
    title: 'COO at Northbridge',
    initials: 'PS',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" style={{ backgroundColor: 'var(--bg)' }} className="py-section">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        <SectionHeader label="CUSTOMER STORIES" title="Loved by Operations Teams" />

        <div className="grid md:grid-cols-3 gap-6 mt-component">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border p-card transition-all duration-300 hover:-translate-y-[2px]"
              style={{
                backgroundColor: 'var(--surface)',
                borderColor: 'var(--border-color)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--card)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} fill="var(--accent)" style={{ color: 'var(--accent)' }} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-body italic mb-5" style={{ color: 'var(--text-primary)' }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Divider */}
              <div className="h-px w-full mb-5" style={{ backgroundColor: 'var(--border-color)' }} />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--surface-hover)' }}
                >
                  <span className="text-label" style={{ color: 'var(--text-primary)' }}>{t.initials}</span>
                </div>
                <div>
                  <p className="text-body-sm font-medium" style={{ color: 'var(--text-primary)' }}>{t.name}</p>
                  <p className="text-body-sm" style={{ color: 'var(--text-muted)' }}>{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
