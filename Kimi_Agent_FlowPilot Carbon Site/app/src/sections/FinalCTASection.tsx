import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { useContactModal } from '@/components/ContactModal';

export default function FinalCTASection() {
  const { open } = useContactModal();

  return (
    <section
      id="contact"
      style={{ backgroundColor: 'var(--accent)' }}
      className="py-section"
    >
      <div className="max-w-content mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-h2 mb-4" style={{ color: '#fff' }}>
            Stop Managing Work.
            <br />
            Start Automating It.
          </h2>
          <p className="text-body max-w-[480px] mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Join hundreds of operations teams that have eliminated busywork with FlowPilot.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <button
              onClick={open}
              className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-[15px] transition-all duration-150 hover:-translate-y-px active:translate-y-0"
              style={{ backgroundColor: '#fff', color: 'var(--accent)' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#FFF5F0')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#fff')}
            >
              <Calendar size={18} />
              Book a Demo
            </button>
            <button
              className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-[15px] border-2 transition-all duration-150 hover:-translate-y-px active:translate-y-0"
              style={{ borderColor: '#fff', color: '#fff' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              Start Free Trial
            </button>
          </div>

          <p className="text-label uppercase" style={{ color: 'rgba(255,255,255,0.7)' }}>
            No credit card required. 14-day free trial.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
