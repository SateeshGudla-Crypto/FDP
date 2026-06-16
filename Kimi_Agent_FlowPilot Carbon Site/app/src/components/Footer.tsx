import { Send } from 'lucide-react';

const footerLinks = {
  Product: ['Features', 'Pricing', 'Security', 'Integrations'],
  Resources: ['Documentation', 'Blog', 'Community', 'Support'],
  Company: ['About', 'Careers', 'Press', 'Contact'],
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--bg)' }} className="pt-20 pb-12">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-12">
          {/* Left - Logo & Description */}
          <div className="lg:max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <Send size={18} className="-rotate-45" style={{ color: 'var(--accent)' }} />
              <span className="font-mono text-label uppercase tracking-wider">
                <span style={{ color: 'var(--text-primary)' }}>Flow</span>
                <span style={{ color: 'var(--accent)' }}>Pilot</span>
              </span>
            </div>
            <p className="text-body-sm" style={{ color: 'var(--text-secondary)' }}>
              AI-powered workflow automation for modern operations teams.
            </p>
          </div>

          {/* Right - Link Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-16">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-label uppercase tracking-wider mb-4" style={{ color: 'var(--text-primary)' }}>
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-body-sm transition-colors duration-150"
                        style={{ color: 'var(--text-secondary)' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderColor: 'var(--border-color)' }}
        >
          <p className="text-body-sm" style={{ color: 'var(--text-muted)' }}>
            &copy; 2025 FlowPilot, Inc.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Security'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-body-sm transition-colors duration-150"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
