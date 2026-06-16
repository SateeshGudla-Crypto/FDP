import { motion } from 'framer-motion';
import { Calendar, Play, Shield, Building2, Lock, Zap, ChevronDown } from 'lucide-react';
import { useContactModal } from '@/components/ContactModal';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const trustBadges = [
  { icon: Shield, label: 'SOC 2 Ready' },
  { icon: Building2, label: 'Enterprise' },
  { icon: Lock, label: 'Secure' },
  { icon: Zap, label: 'AI-Powered' },
];

export default function HeroSection() {
  const { open } = useContactModal();

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center pt-16"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="max-w-content mx-auto px-6 lg:px-12 w-full py-16 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left Column */}
          <motion.div
            className="lg:w-[55%]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* YC Badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
              <span
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: 'var(--accent)' }}
              />
              <span className="text-label uppercase" style={{ color: 'var(--accent)' }}>
                YC W25 Backed
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-display mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              Automate Operations.
              <br />
              Eliminate Busywork.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-body max-w-[480px] mb-8"
              style={{ color: 'var(--text-secondary)' }}
            >
              FlowPilot helps operations teams automate repetitive workflows using AI-powered
              automation and no-code orchestration — reducing manual effort by up to 80%.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={open}
                className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-[15px] text-white transition-all duration-150 hover:-translate-y-px active:translate-y-0"
                style={{ backgroundColor: 'var(--accent)' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-hover)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent)')}
              >
                <Calendar size={18} />
                Book a Demo
              </button>
              <button
                className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-[15px] border transition-all duration-150 hover:-translate-y-px active:translate-y-0"
                style={{
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--surface)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <Play size={18} />
                Watch Product Tour
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              {trustBadges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5"
                  style={{ color: 'var(--text-muted)' }}
                >
                  <Icon size={14} />
                  <span className="text-label uppercase">{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Workflow Visualization */}
          <motion.div
            className="lg:w-[45%] w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0, 0, 0.2, 1] }}
          >
            <div
              className="rounded-xl border overflow-hidden p-6 lg:p-8"
              style={{
                backgroundColor: 'var(--surface)',
                borderColor: 'var(--border-color)',
                boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.05)',
                perspective: '1000px',
              }}
            >
              <div style={{ transform: 'rotateY(-3deg)' }}>
                <WorkflowVisualization />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-8" style={{ backgroundColor: 'var(--border-color)' }} />
        <ChevronDown
          size={20}
          className="animate-bounce-down"
          style={{ color: 'var(--text-muted)' }}
        />
      </div>
    </section>
  );
}

function WorkflowVisualization() {
  const nodes = [
    { id: 1, label: 'Trigger', sub: 'New Form', x: 10, y: 10, w: 90 },
    { id: 2, label: 'AI Extract', sub: 'Parse Data', x: 160, y: 10, w: 100 },
    { id: 3, label: 'Validate', sub: 'Check Fields', x: 320, y: 10, w: 100 },
    { id: 4, label: 'Condition', sub: 'Priority?', x: 200, y: 90, w: 110, diamond: true },
    { id: 5, label: 'Route High', sub: '→ Manager', x: 360, y: 90, w: 100 },
    { id: 6, label: 'Auto-Process', sub: 'Standard', x: 40, y: 90, w: 110 },
    { id: 7, label: 'Notify', sub: 'Slack', x: 160, y: 170, w: 80 },
    { id: 8, label: 'Archive', sub: 'Complete', x: 300, y: 170, w: 90 },
  ];

  const connections = [
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 4 },
    { from: 4, to: 5, active: true },
    { from: 4, to: 6 },
    { from: 5, to: 8 },
    { from: 6, to: 7 },
    { from: 7, to: 8 },
  ];

  return (
    <svg viewBox="0 0 480 240" className="w-full h-auto">
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="var(--border-color)" />
        </marker>
        <marker id="arrow-active" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="var(--accent)" />
        </marker>
      </defs>

      {/* Connection lines */}
      {connections.map((conn, i) => {
        const fromNode = nodes.find(n => n.id === conn.from)!;
        const toNode = nodes.find(n => n.id === conn.to)!;
        const x1 = fromNode.x + fromNode.w / 2;
        const y1 = fromNode.y + (fromNode.diamond ? 25 : 35);
        const x2 = toNode.x + toNode.w / 2;
        const y2 = toNode.y + (toNode.diamond ? -5 : 5);

        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={conn.active ? 'var(--accent)' : 'var(--border-color)'}
            strokeWidth="2"
            strokeDasharray={conn.active ? '8 6' : undefined}
            className={conn.active ? 'animate-dash-flow' : ''}
            markerEnd={conn.active ? 'url(#arrow-active)' : 'url(#arrow)'}
          />
        );
      })}

      {/* Nodes */}
      {nodes.map((node) => (
        <g key={node.id}>
          {node.diamond ? (
            <polygon
              points={`${node.x + node.w / 2},${node.y} ${node.x + node.w},${node.y + 25} ${node.x + node.w / 2},${node.y + 50} ${node.x},${node.y + 25}`}
              fill="var(--surface-hover)"
              stroke="var(--accent)"
              strokeWidth="1.5"
              rx="4"
            />
          ) : (
            <rect
              x={node.x}
              y={node.y}
              width={node.w}
              height="50"
              rx="6"
              fill="var(--surface-hover)"
              stroke={node.id <= 3 ? 'var(--accent)' : 'var(--border-color)'}
              strokeWidth="1"
            />
          )}
          <text
            x={node.x + node.w / 2}
            y={node.diamond ? node.y + 20 : node.y + 20}
            textAnchor="middle"
            fill="var(--text-primary)"
            fontSize="11"
            fontWeight="500"
            fontFamily="IBM Plex Sans, sans-serif"
          >
            {node.label}
          </text>
          <text
            x={node.x + node.w / 2}
            y={node.diamond ? node.y + 34 : node.y + 34}
            textAnchor="middle"
            fill="var(--text-muted)"
            fontSize="9"
            fontFamily="IBM Plex Mono, monospace"
          >
            {node.sub}
          </text>
        </g>
      ))}

      {/* Flow label */}
      <text
        x="240"
        y="230"
        textAnchor="middle"
        fill="var(--text-muted)"
        fontSize="10"
        fontFamily="IBM Plex Mono, monospace"
        letterSpacing="0.08em"
      >
        WORKFLOW AUTOMATION
      </text>
    </svg>
  );
}
