/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // FlowPilot custom tokens
        fp: {
          bg: '#111318',
          surface: '#1A1D24',
          'surface-hover': '#22262E',
          'text-primary': '#F2F2F2',
          'text-secondary': '#8E929B',
          'text-muted': '#5C6068',
          accent: '#FF7A33',
          'accent-hover': '#E56A26',
          'accent-glow': 'rgba(255, 122, 51, 0.15)',
          'border-color': '#2A2E36',
          'border-focus': '#FF7A33',
          success: '#4ADE80',
          'light-bg': '#F5F5F0',
          'light-text': '#111318',
          'light-surface': '#FFFFFF',
          'light-border': '#E5E5E0',
        },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '600' }],
        'h2': ['2.75rem', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h3': ['1.75rem', { lineHeight: '1.25', fontWeight: '500' }],
        'h4': ['1.125rem', { lineHeight: '1.4', fontWeight: '500' }],
        'body': ['1.0625rem', { lineHeight: '1.65', fontWeight: '400' }],
        'body-sm': ['0.9375rem', { lineHeight: '1.6', fontWeight: '400' }],
        'label': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.08em', fontWeight: '500' }],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        'card': '0 8px 24px rgba(0, 0, 0, 0.2)',
        'card-lg': '0 12px 32px rgba(0, 0, 0, 0.3)',
        'card-light': '0 4px 16px rgba(0, 0, 0, 0.08)',
        'nav': '0 2px 8px rgba(0, 0, 0, 0.3)',
        'modal': '0 24px 64px rgba(0, 0, 0, 0.5)',
        'mockup': '0 20px 60px rgba(0, 0, 0, 0.4)',
      },
      maxWidth: {
        'content': '1200px',
      },
      spacing: {
        'section': '120px',
        'card': '32px',
        'component': '48px',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
