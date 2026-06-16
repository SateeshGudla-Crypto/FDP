import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

const tabs = [
  { id: 0, label: 'Workflow Builder' },
  { id: 1, label: 'Analytics' },
  { id: 2, label: 'Automation Logs' },
];

export default function ProductDemoSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="product-demo" style={{ backgroundColor: 'var(--bg)' }} className="py-section">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        <SectionHeader label="PRODUCT DEMO" title="See FlowPilot in Action" />

        {/* Tab Bar */}
        <div className="flex justify-center gap-1 mt-component mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="px-5 py-3 rounded-t-lg text-sm font-medium transition-all duration-150"
              style={{
                backgroundColor: activeTab === tab.id ? 'var(--surface)' : 'transparent',
                color: activeTab === tab.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                borderBottom: activeTab === tab.id ? '2px solid var(--accent)' : '2px solid transparent',
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab.id) e.currentTarget.style.color = 'var(--text-primary)';
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab.id) e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div
          className="rounded-xl border overflow-hidden"
          style={{
            backgroundColor: 'var(--surface)',
            borderColor: 'var(--border-color)',
            boxShadow: 'var(--mockup)',
          }}
        >
          <AnimatePresence mode="wait">
            {activeTab === 0 && (
              <motion.div
                key="workflow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="p-6 lg:p-10"
              >
                <WorkflowBuilderDemo />
              </motion.div>
            )}
            {activeTab === 1 && (
              <motion.div
                key="analytics"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="p-6 lg:p-10"
              >
                <AnalyticsDemo />
              </motion.div>
            )}
            {activeTab === 2 && (
              <motion.div
                key="logs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="p-6 lg:p-10"
              >
                <AutomationLogsDemo />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function WorkflowBuilderDemo() {
  const nodes = [
    { id: 1, label: 'Trigger: New Slack Message', x: 5, y: 5, w: 160, h: 50, color: 'var(--accent)' },
    { id: 2, label: 'AI Extract Data', x: 220, y: 5, w: 140, h: 50, color: 'var(--border-color)' },
    { id: 3, label: 'Condition: Priority > High', x: 160, y: 100, w: 170, h: 50, diamond: true, color: 'var(--accent)' },
    { id: 4, label: 'Send to Jira', x: 340, y: 180, w: 120, h: 50, color: 'var(--accent)' },
    { id: 5, label: 'Archive', x: 80, y: 180, w: 100, h: 50, color: 'var(--border-color)' },
  ];

  return (
    <svg viewBox="0 0 480 250" className="w-full h-auto max-h-[400px]">
      {/* Connections */}
      <line x1="85" y1="55" x2="290" y2="55" stroke="var(--border-color)" strokeWidth="2" markerEnd="url(#demo-arrow)" />
      <line x1="360" y1="55" x2="245" y2="100" stroke="var(--border-color)" strokeWidth="2" markerEnd="url(#demo-arrow)" />
      <line x1="245" y1="150" x2="400" y2="180" stroke="var(--accent)" strokeWidth="2" strokeDasharray="6 4" markerEnd="url(#demo-arrow-active)" />
      <line x1="245" y1="150" x2="130" y2="180" stroke="var(--border-color)" strokeWidth="2" markerEnd="url(#demo-arrow)" />

      <defs>
        <marker id="demo-arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="var(--border-color)" />
        </marker>
        <marker id="demo-arrow-active" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="var(--accent)" />
        </marker>
      </defs>

      {nodes.map((node) => (
        <g key={node.id}>
          {node.diamond ? (
            <polygon
              points={`${node.x + node.w / 2},${node.y} ${node.x + node.w},${node.y + node.h / 2} ${node.x + node.w / 2},${node.y + node.h} ${node.x},${node.y + node.h / 2}`}
              fill="var(--surface-hover)"
              stroke={node.color}
              strokeWidth="1.5"
            />
          ) : (
            <rect
              x={node.x}
              y={node.y}
              width={node.w}
              height={node.h}
              rx="8"
              fill="var(--surface-hover)"
              stroke={node.color}
              strokeWidth={node.color === 'var(--accent)' ? '1.5' : '1'}
            />
          )}
          <text
            x={node.x + node.w / 2}
            y={node.y + node.h / 2 + 1}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="var(--text-primary)"
            fontSize="10"
            fontWeight="500"
            fontFamily="IBM Plex Sans, sans-serif"
          >
            {node.label.length > 20 ? `${node.label.slice(0, 18)}...` : node.label}
          </text>
        </g>
      ))}

      {/* Active path indicator */}
      <circle cx="320" cy="165" r="4" fill="var(--accent)">
        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function AnalyticsDemo() {
  const metrics = [
    { label: 'Workflows Run', value: '1,247' },
    { label: 'Success Rate', value: '99.2%' },
    { label: 'Time Saved', value: '384h' },
  ];

  const barData = [35, 55, 40, 75, 50, 90, 65];

  return (
    <div className="space-y-6">
      {/* Metric Cards */}
      <div className="grid grid-cols-3 gap-4">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="rounded-lg border p-4"
            style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border-color)' }}
          >
            <span className="text-label uppercase block mb-1" style={{ color: 'var(--text-muted)' }}>{m.label}</span>
            <span className="font-mono text-2xl lg:text-3xl" style={{ color: 'var(--text-primary)' }}>{m.value}</span>
          </div>
        ))}
      </div>

      {/* Bar Chart */}
      <div
        className="rounded-lg border p-6"
        style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border-color)' }}
      >
        <span className="text-label uppercase block mb-4" style={{ color: 'var(--text-muted)' }}>Workflow Execution Volume</span>
        <div className="flex items-end gap-2 h-40">
          {barData.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full relative" style={{ height: `${h}%` }}>
                <div
                  className="absolute inset-0 rounded-t"
                  style={{
                    backgroundColor: i === 5 ? 'var(--accent)' : 'var(--border-color)',
                    opacity: i === 5 ? 1 : 0.6 - i * 0.05,
                  }}
                />
              </div>
              <span className="text-[10px] font-mono" style={{ color: 'var(--text-muted)' }}>
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AutomationLogsDemo() {
  const logs = [
    { time: '2025-01-15 09:23:14', workflow: 'Invoice Processing', status: 'Completed', duration: '2.3s' },
    { time: '2025-01-15 09:22:08', workflow: 'Employee Onboarding', status: 'Completed', duration: '4.1s' },
    { time: '2025-01-15 09:21:45', workflow: 'Ticket Routing', status: 'Completed', duration: '0.8s' },
    { time: '2025-01-15 09:20:33', workflow: 'Report Generation', status: 'Completed', duration: '12.5s' },
    { time: '2025-01-15 09:19:12', workflow: 'Data Sync', status: 'Completed', duration: '3.2s' },
    { time: '2025-01-15 09:18:55', workflow: 'Approval Request', status: 'Completed', duration: '1.5s' },
    { time: '2025-01-15 09:17:40', workflow: 'Notification Batch', status: 'Completed', duration: '5.7s' },
  ];

  return (
    <div
      className="rounded-lg border overflow-hidden"
      style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border-color)' }}
    >
      {/* Table Header */}
      <div
        className="grid grid-cols-4 gap-4 px-4 py-3 text-label uppercase"
        style={{ color: 'var(--text-muted)', borderBottom: '1px solid var(--border-color)' }}
      >
        <span>Timestamp</span>
        <span>Workflow</span>
        <span>Status</span>
        <span>Duration</span>
      </div>

      {/* Table Rows */}
      {logs.map((log, i) => (
        <div
          key={i}
          className="grid grid-cols-4 gap-4 px-4 py-3 text-sm transition-colors"
          style={{
            backgroundColor: i % 2 === 0 ? 'var(--bg)' : 'var(--surface)',
            borderBottom: i < logs.length - 1 ? '1px solid var(--border-color)' : undefined,
          }}
        >
          <span className="font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>{log.time}</span>
          <span style={{ color: 'var(--text-primary)' }}>{log.workflow}</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 size={14} style={{ color: 'var(--success)' }} />
            <span style={{ color: 'var(--success)' }}>{log.status}</span>
          </span>
          <span className="font-mono" style={{ color: 'var(--text-secondary)' }}>{log.duration}</span>
        </div>
      ))}
    </div>
  );
}
