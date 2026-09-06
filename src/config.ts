import type { ThemeObjectOrShikiThemeName } from 'astro-expressive-code'

type Config = {
  author: string
  title: string
  description: string
  lang: string
  themes: {
    dark: ThemeObjectOrShikiThemeName
    light: ThemeObjectOrShikiThemeName
  }
}

export default {
  author: 'Julius Le',
  title: 'Julius',
  description: 'Essays, ideas, notes, and reflections on technology, building, and life.',
  lang: 'en',
  themes: {
    dark: 'github-dark',
    light: 'github-light'
  }
} satisfies Config
