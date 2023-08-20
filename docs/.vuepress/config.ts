import { defineUserConfig } from 'vuepress';
import { defaultTheme } from '@vuepress/theme-default';

export default defineUserConfig({
  lang: 'en-US',
  title: 'Vinyard',
  description: 'Just playing around and get your purple grapes',
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  theme: defaultTheme({
    logo: '/images/logo.png',
    navbar: [
      // NavbarItem
      // {
      //   text: 'HOME',
      //   link: '/',
      // },
      // NavbarGroup
      {
        text: 'Neurons',
        children: [
          {
            text: 'Docker and CI/CD',
            link: '/work/2308_docker_cicd.md'
          }, 
          {
            text: 'CI/CD',
            link: '/work/2309_linux.md'
          }
        ]
      },
      {
        text: 'Proteins',
        children: ['/workout/grapes.md']
      },
      {
        text: 'Dreams',
        children: [
          {
            text: 'Prep',
            link: '/study/0730_prep.md'
          }, 
          {
            text: 'Typescript',
            link: '/study/0806_typescript.md'
          },
          {
            text: 'GitHub Actions',
            link: '/study/0820_githubActions.md'
          }
        ]
      }
      // string - page file path
      //'/bar/README.md',
    ],
    sidebar: {
      // SidebarItem
      '/work/': [
        {
          text: 'Neurons',
          collapsible: true,
          children: ['/work/2308_docker_cicd.md', '/work/2309_linux.md'],
        }
      ],
      '/workout/': [
        {
          text: 'Proteins',
          collapsible: true,
          children: ['/workout/grapes.md'],
        },
      ],
      '/study/': [
        {
          text: 'Dreams',
          collapsible: false,
          children: ['/study/0730_prep.md', '/study/0806_typescript.md', '/study/0820_githubActions.md'],
        }
      ]
    },
  }),
})