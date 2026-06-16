import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Lock, Calendar } from 'lucide-react';

interface ContactModalContextType {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const ContactModalContext = createContext<ContactModalContextType>({
  isOpen: false,
  open: () => {},
  close: () => {},
});

export function useContactModal() {
  return useContext(ContactModalContext);
}

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <ContactModalContext.Provider value={{ isOpen, open, close }}>
      {children}
      <AnimatePresence>
        {isOpen && <ContactModal onClose={close} />}
      </AnimatePresence>
    </ContactModalContext.Provider>
  );
}

function ContactModal({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(17, 19, 24, 0.8)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="w-full max-w-[520px] rounded-xl border border-fp-border-color p-8 sm:p-10"
        style={{ backgroundColor: 'var(--surface)', boxShadow: 'var(--modal)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-h3 font-semibold" style={{ color: 'var(--text-primary)' }}>Book a Demo</h3>
          <button
            onClick={onClose}
            className="p-1 rounded-md transition-colors"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            <X size={20} />
          </button>
        </div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <FormField label="Full Name">
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-md border px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: 'var(--surface-hover)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)',
                  }}
                  placeholder="John Smith"
                />
              </FormField>

              <FormField label="Work Email">
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md border px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: 'var(--surface-hover)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)',
                  }}
                  placeholder="john@company.com"
                />
              </FormField>

              <FormField label="Company Name">
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full rounded-md border px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: 'var(--surface-hover)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)',
                  }}
                  placeholder="Acme Inc."
                />
              </FormField>

              <FormField label="Team Size">
                <select
                  name="teamSize"
                  required
                  value={formData.teamSize}
                  onChange={handleChange}
                  className="w-full rounded-md border px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2 appearance-none"
                  style={{
                    backgroundColor: 'var(--surface-hover)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)',
                  }}
                >
                  <option value="">Select team size</option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="201-500">201-500</option>
                  <option value="500+">500+</option>
                </select>
              </FormField>

              <FormField label="What would you like to automate?">
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-md border px-4 py-3 text-sm transition-colors resize-none focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: 'var(--surface-hover)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)',
                  }}
                  placeholder="Describe your workflow challenges..."
                />
              </FormField>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-lg py-3.5 px-7 font-semibold text-[15px] transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0"
                style={{
                  backgroundColor: 'var(--accent)',
                  color: '#fff',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-hover)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent)')}
              >
                <Calendar size={18} />
                Request Demo
              </button>

              <p className="flex items-center justify-center gap-1.5 text-xs" style={{ color: 'var(--text-muted)' }}>
                <Lock size={12} />
                Your information is secure. We never share your data.
              </p>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center text-center py-8"
            >
              <CheckCircle2 size={48} style={{ color: 'var(--success)' }} className="mb-4" />
              <h3 className="text-h3 font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Request Sent!</h3>
              <p className="text-body-sm" style={{ color: 'var(--text-secondary)' }}>
                We&apos;ll be in touch within 24 hours to schedule your demo.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

function FormField({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <label className="block text-label mb-1.5" style={{ color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
        {label}
      </label>
      {children}
    </div>
  );
}
