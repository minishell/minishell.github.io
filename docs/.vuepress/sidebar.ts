import { defaultTheme } from '@vuepress/theme-default';

export default defaultTheme({
    navbar: [
    {
        text: '/work/',
        children: [
        {
            text: 'Neurons',
            children: ['/work/2308_docker_cicd.md', '/work/2309_linux.md'],
        }
        ],
    },
    {
        text: '/workout/',
        children: [
        {
            text: 'Proteins',
            children: ['/workout/grapes.md'],
        }
        ]
    },
    {
        text: '/study/',
        children: [
        {
            text: 'Dreams',
            children: ['/study/0730_prep.md', '/study/0806_typescript.md'],
        }
        ]
    }
]
})
