import AnimatedCounter from '@/components/AnimatedCounter';

const metrics = [
  { target: 80, suffix: '%', label: 'Less Manual Work', description: 'Average reduction in manual tasks' },
  { target: 10, suffix: '\u00D7', label: 'Faster Processes', description: 'Workflow completion speed improvement' },
  { target: 500, suffix: '+', label: 'Workflows Daily', description: 'Automated workflows executed every day' },
  { target: 99.9, suffix: '%', label: 'Platform Uptime', description: 'Enterprise-grade reliability', decimals: 1 },
];

export default function MetricsSection() {
  return (
    <section id="metrics" style={{ backgroundColor: 'var(--surface)' }} className="py-20">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        {/* Divider */}
        <div className="w-full h-px mb-16" style={{ backgroundColor: 'var(--border-color)' }} />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <AnimatedCounter
                target={metric.target}
                suffix={metric.suffix}
                decimals={metric.decimals || 0}
              />
              <h4 className="text-h4 mt-2 mb-1" style={{ color: 'var(--text-primary)' }}>{metric.label}</h4>
              <p className="text-body-sm" style={{ color: 'var(--text-secondary)' }}>{metric.description}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px mt-16" style={{ backgroundColor: 'var(--border-color)' }} />
      </div>
    </section>
  );
}
