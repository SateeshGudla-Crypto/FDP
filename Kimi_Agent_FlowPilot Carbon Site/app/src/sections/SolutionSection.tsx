import { motion } from 'framer-motion';
import { Bot, Workflow, Plug, BarChart3 } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

const valueProps = [
  { icon: Bot, title: 'AI Agents', description: 'Autonomous agents handle complex multi-step workflows.' },
  { icon: Workflow, title: 'Workflow Automation', description: 'Build and deploy workflows without writing code.' },
  { icon: Plug, title: 'Deep Integrations', description: 'Connect with 100+ enterprise tools out of the box.' },
  { icon: BarChart3, title: 'Real-Time Analytics', description: 'Monitor performance and optimize continuously.' },
];

export default function SolutionSection() {
  return (
    <section id="solution" style={{ backgroundColor: 'var(--bg)' }} className="py-section">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        <SectionHeader
          label="THE SOLUTION"
          title="Meet FlowPilot"
          subtitle="The AI-powered automation platform that replaces manual workflows with intelligent, self-running processes."
        />

        {/* Value Props */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-component">
          {valueProps.map((prop, i) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border-color)' }}
              >
                <prop.icon size={28} style={{ color: 'var(--accent)' }} />
              </div>
              <h4 className="text-h4 mb-2" style={{ color: 'var(--text-primary)' }}>{prop.title}</h4>
              <p className="text-body-sm" style={{ color: 'var(--text-secondary)' }}>{prop.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Product Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-component rounded-xl border overflow-hidden"
          style={{
            backgroundColor: 'var(--surface)',
            borderColor: 'var(--border-color)',
            boxShadow: 'var(--mockup)',
          }}
        >
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="flex h-[400px] lg:h-[480px]">
      {/* Left Sidebar */}
      <div
        className="hidden sm:flex flex-col items-center py-4 gap-4 w-14 flex-shrink-0"
        style={{ backgroundColor: 'var(--bg)', borderRight: '1px solid var(--border-color)' }}
      >
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="w-8 h-8 rounded-md flex items-center justify-center"
            style={{
              backgroundColor: i === 1 ? 'var(--accent-glow)' : 'transparent',
              border: i === 1 ? '1px solid var(--accent)' : '1px solid transparent',
            }}
          >
            <div
              className="w-4 h-4 rounded"
              style={{
                backgroundColor: i === 1 ? 'var(--accent)' : 'var(--border-color)',
              }}
            />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <div
          className="flex items-center justify-between px-4 py-3"
          style={{ borderBottom: '1px solid var(--border-color)' }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-48 h-8 rounded-md hidden sm:block"
              style={{ backgroundColor: 'var(--surface-hover)', border: '1px solid var(--border-color)' }}
            />
            <span className="text-label uppercase sm:hidden" style={{ color: 'var(--text-muted)' }}>Dashboard</span>
          </div>
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full"
              style={{ backgroundColor: 'var(--surface-hover)', border: '1px solid var(--border-color)' }}
            />
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-4 lg:p-6 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full">
            {/* Workflow Builder Panel */}
            <div className="lg:col-span-2 rounded-lg border p-4" style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border-color)' }}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-label uppercase" style={{ color: 'var(--text-muted)' }}>Workflow Builder</span>
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded" style={{ backgroundColor: 'var(--surface-hover)' }} />
                  <div className="w-6 h-6 rounded" style={{ backgroundColor: 'var(--surface-hover)' }} />
                </div>
              </div>

              {/* Mini workflow */}
              <div className="relative h-[200px] lg:h-[280px]">
                <WorkflowNode label="Trigger" sub="New Ticket" x="5%" y="10%" active />
                <WorkflowNode label="AI Classify" sub="Categorize" x="35%" y="10%" />
                <WorkflowNode label="Route" sub="Assign" x="65%" y="10%" />
                <WorkflowNode label="Condition" sub="Priority?" x="20%" y="50%" diamond />
                <WorkflowNode label="Escalate" sub="Urgent" x="55%" y="50%" />
                <WorkflowNode label="Resolve" sub="Auto" x="40%" y="80%" />

                {/* Connection lines (simplified with divs) */}
                <div className="absolute" style={{ left: '18%', top: '22%', width: '15%', height: '2px', backgroundColor: 'var(--border-color)' }} />
                <div className="absolute" style={{ left: '48%', top: '22%', width: '15%', height: '2px', backgroundColor: 'var(--border-color)' }} />
                <div className="absolute" style={{ left: '30%', top: '32%', width: '2px', height: '18%', backgroundColor: 'var(--accent)' }} />
                <div className="absolute" style={{ left: '32%', top: '60%', width: '20%', height: '2px', backgroundColor: 'var(--accent)' }} />
                <div className="absolute" style={{ left: '60%', top: '60%', width: '2px', height: '20%', backgroundColor: 'var(--border-color)' }} />
              </div>
            </div>

            {/* Right Panel - Analytics */}
            <div className="hidden lg:flex flex-col gap-4">
              {/* Metric Cards */}
              {[
                { label: 'Workflows Run', value: '1,247', change: '+12%' },
                { label: 'Success Rate', value: '99.2%', change: '+0.5%' },
                { label: 'Time Saved', value: '384h', change: '+48h' },
              ].map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-lg border p-4"
                  style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border-color)' }}
                >
                  <span className="text-label uppercase block mb-1" style={{ color: 'var(--text-muted)' }}>{metric.label}</span>
                  <div className="flex items-end justify-between">
                    <span className="font-mono text-2xl" style={{ color: 'var(--text-primary)' }}>{metric.value}</span>
                    <span className="text-label" style={{ color: 'var(--success)' }}>{metric.change}</span>
                  </div>
                </div>
              ))}

              {/* Mini chart */}
              <div
                className="flex-1 rounded-lg border p-4"
                style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border-color)' }}
              >
                <span className="text-label uppercase block mb-3" style={{ color: 'var(--text-muted)' }}>Activity</span>
                <div className="flex items-end gap-1.5 h-20">
                  {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t"
                      style={{
                        height: `${h}%`,
                        backgroundColor: i === 5 ? 'var(--accent)' : 'var(--border-color)',
                        opacity: i === 5 ? 1 : 0.5,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkflowNode({ label, sub, x, y, active, diamond }: {
  label: string; sub: string; x: string; y: string; active?: boolean; diamond?: boolean;
}) {
  return (
    <div
      className="absolute flex flex-col items-center"
      style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
    >
      <div
        className="px-3 py-2 rounded-md text-center min-w-[80px]"
        style={{
          backgroundColor: active ? 'var(--accent-glow)' : 'var(--surface-hover)',
          border: `1px solid ${active ? 'var(--accent)' : 'var(--border-color)'}`,
          transform: diamond ? 'rotate(45deg)' : undefined,
        }}
      >
        <div style={{ transform: diamond ? 'rotate(-45deg)' : undefined }}>
          <div className="text-[10px] font-medium" style={{ color: 'var(--text-primary)' }}>{label}</div>
          <div className="text-[8px] font-mono" style={{ color: 'var(--text-muted)' }}>{sub}</div>
        </div>
      </div>
    </div>
  );
}
