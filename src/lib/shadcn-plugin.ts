import plugin from "tailwindcss/plugin"
import { fontFamily } from "tailwindcss/defaultTheme"

export const shadcnPlugin = plugin(
  // --vp-c-bg: #1b1b1f;
  // --vp-c-bg-alt: #161618;
  //1.add Css varibale definitions to the base layer
  function ({ addBase }) {
    addBase({
      ":root": {
        "--background": "0 0% 100%",
        "--foreground": "20 14.3% 4.1%",
        "--card": "0 0% 100%",
        "--card-foreground": "20 14.3% 4.1%",
        "--popover": "0 0% 100%",
        "--popover-foreground": "20 14.3% 4.1%",
        "--primary": "24.6 95% 53.1%",
        "--primary-foreground": "60 9.1% 97.8%",
        "--secondary": "60 4.8% 95.9%",
        "--secondary-foreground": "24 9.8% 10%",
        "--muted": "60 4.8% 95.9%",
        "--muted-foreground": "25 5.3% 44.7%",
        "--accent": "60 4.8% 95.9%",
        "--accent-foreground": "24 9.8% 10%",
        "--destructive": "0 84.2% 60.2%",
        "--destructive-foreground": "60 9.1% 97.8%",
        "--border": "20 5.9% 90%",
        "--input": "20 5.9% 90%",
        "--ring": "24.6 95% 53.1%",
        "--radius": "0.75rem",
        "--success": "164, 95%, 43%",
        "--success-foreground": "60 9.1% 97.8%"
      },
      ".dark": {
        "--background": "240 7% 11%",
        "--foreground": "60 9.1% 97.8%",
        "--card": "240 4% 9%",
        "--card-foreground": "60 9.1% 97.8%",
        "--popover": "20 14.3% 4.1%",
        "--popover-foreground": "60 9.1% 97.8%",
        "--primary": "20.5 90.2% 48.2%",
        "--primary-foreground": "60 9.1% 97.8%",
        "--secondary": "12 6.5% 15.1%",
        "--secondary-foreground": "60 9.1% 97.8%",
        "--muted": "12 6.5% 15.1%",
        "--muted-foreground": "24 5.4% 63.9%",
        "--accent": "12 6.5% 15.1%",
        "--accent-foreground": "60 9.1% 97.8%",
        "--destructive": "0 72.2% 50.6%",
        "--destructive-foreground": "60 9.1% 97.8%",
        "--border": "12 6.5% 15.1%",
        "--input": "12 6.5% 15.1%",
        "--ring": "20.5 90.2% 48.2%"
      }
    })

    addBase({
      "*": {
        "@apply border-border": {},
      },
      body: {
        "@apply bg-background text-foreground": {},
        "font-feature-settings": '"rlig" 1, "calt" 1',
      },
    })
  },

  //2. extend the tailwind theme with "themable" util

  {
    theme: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          "2xl": "824px",
        },
      },
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
          success: {
            DEFAULT: "hsl(var(--success),  <alpha-value>)",
            foreground: "hsl(var(--success-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
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
          }
        },
        borderRadius: {
          lg: `var(--radius)`,
          md: `calc(var(--radius) - 2px)`,
          sm: "calc(var(--radius) - 4px)",
        },
        fontFamily: {
          sans: ["var(--font-sans)", ...fontFamily.sans],
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
          "rotate-center": {
            '0%': { transform: 'rotate(0)' },
            '100%': { transform: 'rotate(360deg)' },
          }
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
          "rotate-center": "rotate-center 0.6s ease-in-out both",
        },
        boxShadow: {
          'inner-moon': 'inset -0.3em 0em 0.1em 0em #cbd5e1',
          'outside-moon': '0em 0em 0.2em 0em rgba(255,255,255,1)',
          'outside-sun': '0em 0em 0.2em 0em #fde047',
          'inner-box': 'inset 0 0 0.1em #3f3f46'
        },
        backgroundImage: {
          'night-sky': "linear-gradient(270deg, rgba(14,49,76,1) 15%, rgba(4,19,38,1) 100%)",
          'day-sky': "linear-gradient(270deg, rgba(14,49,76,1) 15%, rgba(4,19,38,1) 100%)",
          'sun-sky': "bg-gradient-to-l from-amber-600 to-yellow-300",
        },
      },
    },
  }
)
