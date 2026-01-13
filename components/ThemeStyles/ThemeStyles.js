import appConfig from '../../app.config';

const themes = {
  blue: {
    '--color-black': '#000',
    '--color-primary': '#000066',
    '--color-secondary': '#0969da',
    '--color-tertiary': '#CCCCCC',
    '--color-white': '#FFFFFF',
    '--color-background': '#f5f7fb',
    '--color-surface': '#ffffff',
    '--color-muted': '#5f6b7a',
    '--color-accent': '#0969da',
    '--color-border': '#e3e8ef',
  },
  red: {
    '--color-black': '#000',
    '--color-primary': '#660000',
    '--color-secondary': '#B50505',
    '--color-tertiary': '#CCCCCC',
    '--color-white': '#FFFFFF',
    '--color-background': '#f6f2f2',
    '--color-surface': '#ffffff',
    '--color-muted': '#6d5c5c',
    '--color-accent': '#B50505',
    '--color-border': '#eadfdf',
  },
  green: {
    '--color-black': '#000',
    '--color-primary': '#006600',
    '--color-secondary': '#006827',
    '--color-tertiary': '#CCCCCC',
    '--color-white': '#FFFFFF',
    '--color-background': '#f2f6f2',
    '--color-surface': '#ffffff',
    '--color-muted': '#5a6b5a',
    '--color-accent': '#006827',
    '--color-border': '#dfe8df',
  },
  earth: {
    '--color-black': '#2b241b',
    '--color-primary': '#8b5e3c',
    '--color-secondary': '#b07a53',
    '--color-tertiary': '#d9c7b2',
    '--color-white': '#fbf7f0',
    '--color-background': '#e7dccb',
    '--color-surface': '#f3eadb',
    '--color-muted': '#6f6153',
    '--color-accent': '#6b4c34',
    '--color-border': '#d2c1ac',
  },
};

export default function ThemeStyles() {
  const themeColor = appConfig?.themeColor ?? 'blue';

  return (
    // eslint-disable-next-line react/no-unknown-property
    <style jsx global>{`
      :root {
        --color-black: ${themes[themeColor]['--color-black']};
        --color-primary: ${themes[themeColor]['--color-primary']};
        --color-secondary: ${themes[themeColor]['--color-secondary']};
        --color-tertiary: ${themes[themeColor]['--color-tertiary']};
        --color-white: ${themes[themeColor]['--color-white']};
        --color-background: ${themes[themeColor]['--color-background']};
        --color-surface: ${themes[themeColor]['--color-surface']};
        --color-muted: ${themes[themeColor]['--color-muted']};
        --color-accent: ${themes[themeColor]['--color-accent']};
        --color-border: ${themes[themeColor]['--color-border']};
      }
    `}</style>
  );
}
