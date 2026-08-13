import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'video-build',
  description: 'Edit any video by conversation. A skill for Grok and other coding agents.',
  base: '/',
  cleanUrls: true,
  head: [['link', { rel: 'icon', href: '/favicon.svg' }]],
  themeConfig: {
    logo: '/favicon.svg',
    nav: [
      { text: 'Guide', link: '/guide/readme' },
      { text: 'Skill reference', link: '/guide/skill' },
      { text: 'Install', link: '/guide/install' },
      { text: 'GitHub', link: 'https://github.com/mattstyles333/video-build' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Overview', link: '/guide/readme' },
            { text: 'Skill reference', link: '/guide/skill' },
            { text: 'Install guide', link: '/guide/install' },
          ],
        },
      ],
    },
    search: { provider: 'local' },
    outline: { level: [2, 3], label: 'On this page' },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mattstyles333/video-build' },
    ],
    footer: {
      message: 'Docs auto-synced from the video-build repository on every push to master.',
    },
  },
})
