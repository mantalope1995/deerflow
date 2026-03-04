/**
 * DeerFlow Mobile Theme System
 *
 * Premium dark-mode-first design with vibrant accent colors,
 * glassmorphism-inspired surfaces, and carefully tuned typography.
 */

const palette = {
    // Primary brand colors
    emerald: {
        50: '#ecfdf5',
        100: '#d1fae5',
        200: '#a7f3d0',
        300: '#6ee7b7',
        400: '#34d399',
        500: '#10b981',
        600: '#059669',
        700: '#047857',
        800: '#065f46',
        900: '#064e3b',
    },
    // Accent — warm amber
    amber: {
        50: '#fffbeb',
        100: '#fef3c7',
        200: '#fde68a',
        300: '#fcd34d',
        400: '#fbbf24',
        500: '#f59e0b',
    },
    // Neutral slate
    slate: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        850: '#172033',
        900: '#0f172a',
        950: '#020617',
    },
    // Semantic
    red: { 400: '#f87171', 500: '#ef4444' },
    blue: { 400: '#60a5fa', 500: '#3b82f6' },
    violet: { 400: '#a78bfa', 500: '#8b5cf6' },
    white: '#ffffff',
    black: '#000000',
} as const;

export const theme = {
    dark: {
        // Backgrounds
        bg: palette.slate[950],
        bgSurface: palette.slate[900],
        bgElevated: palette.slate[800],
        bgInput: palette.slate[850],
        bgGlass: 'rgba(15, 23, 42, 0.85)',

        // Text
        text: palette.slate[50],
        textSecondary: palette.slate[400],
        textMuted: palette.slate[500],
        textInverse: palette.slate[950],

        // Brand
        primary: palette.emerald[400],
        primaryMuted: palette.emerald[600],
        accent: palette.amber[400],

        // Borders
        border: palette.slate[700],
        borderSubtle: palette.slate[800],

        // Semantic
        success: palette.emerald[400],
        error: palette.red[400],
        info: palette.blue[400],
        warning: palette.amber[400],

        // Message bubbles
        humanBubble: palette.emerald[600],
        humanBubbleText: palette.white,
        aiBubble: palette.slate[800],
        aiBubbleText: palette.slate[50],

        // Tab bar
        tabBar: palette.slate[900],
        tabBarBorder: palette.slate[800],
        tabActive: palette.emerald[400],
        tabInactive: palette.slate[500],
    },
    light: {
        // Backgrounds
        bg: palette.white,
        bgSurface: palette.slate[50],
        bgElevated: palette.white,
        bgInput: palette.slate[100],
        bgGlass: 'rgba(255, 255, 255, 0.85)',

        // Text
        text: palette.slate[900],
        textSecondary: palette.slate[600],
        textMuted: palette.slate[400],
        textInverse: palette.white,

        // Brand
        primary: palette.emerald[600],
        primaryMuted: palette.emerald[100],
        accent: palette.amber[500],

        // Borders
        border: palette.slate[200],
        borderSubtle: palette.slate[100],

        // Semantic
        success: palette.emerald[500],
        error: palette.red[500],
        info: palette.blue[500],
        warning: palette.amber[500],

        // Message bubbles
        humanBubble: palette.emerald[500],
        humanBubbleText: palette.white,
        aiBubble: palette.slate[100],
        aiBubbleText: palette.slate[900],

        // Tab bar
        tabBar: palette.white,
        tabBarBorder: palette.slate[200],
        tabActive: palette.emerald[600],
        tabInactive: palette.slate[400],
    },
} as const;

export type ThemeColors = typeof theme.dark;

export const spacing = {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    '2xl': 24,
    '3xl': 32,
    '4xl': 40,
    '5xl': 48,
} as const;

export const radius = {
    sm: 6,
    md: 10,
    lg: 14,
    xl: 20,
    full: 9999,
} as const;

export const fontSize = {
    xs: 11,
    sm: 13,
    base: 15,
    md: 17,
    lg: 20,
    xl: 24,
    '2xl': 30,
    '3xl': 36,
} as const;

export const fontWeight = {
    normal: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
};
