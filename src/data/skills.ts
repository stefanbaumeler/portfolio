export default [
    {
        name: 'JavaScript',
        color: '#F7DF1C',
        children: [
            {
                name: 'TypeScript',
                color: '#2E79C7',
                hint: 'JS superset'
            },
            {
                name: 'GSAP',
                color: '#89CE03',
                hint: 'Animations'
            },
            {
                name: 'React',
                color: '#61DBFB',
                hint: 'framework',
                children: [
                    {
                        name: 'Next.js',
                        hint: 'meta-framework'
                    }
                ]
            },
            {
                name: 'Vue',
                hint: 'framework',
                color: '#3FBA84',
                children: [
                    {
                        name: 'Nuxt.js',
                        hint: 'meta-framework'
                    }
                ]
            },
            {
                name: 'Node.js',
                color: '#84CE24',
                hint: 'preferred backend',
                children: [
                    {
                        name: 'Express',
                        hint: 'framework'
                    },
                    {
                        name: 'Knex.js',
                        hint: 'orm'
                    },
                    {
                        name: 'Prisma',
                        hint: 'orm'
                    }
                ]
            }
        ]
    },
    {
        name: 'API',
        children: [
            {
                name: 'GraphQL',
                hint: 'preferred',
                color: '#E10198',
                children: [
                    {
                        name: 'Apollo',
                        hint: 'framework'
                    },
                    {
                        name: 'graphql-codegen',
                        hint: 'type generation'
                    }
                ]
            },
            {
                name: 'REST',
                hint: 'also works'
            }
        ]
    },
    {
        name: 'Styling',
        color: '#214CE5',
        children: [
            {
                color: '#CE679B',
                name: 'SCSS',
                hint: 'preprocessor'
            },
            {
                name: 'BEM',
                hint: 'methodology'
            }
        ]
    },
    {
        name: 'Testing',
        color: '#1E8D22',
        children: [
            {
                name: 'Jest',
                hint: 'unit & integration'
            },
            {
                name: 'Playwright',
                hint: 'e2e'
            },
            {
                name: 'Cypress',
                hint: 'e2e'
            }
        ]
    },
    {
        name: 'Database',
        children: [
            {
                name: 'MySQL',
                hint: 'with PHP'
            },
            {
                name: 'PostgreSQL',
                hint: 'with Node.js'
            }
        ]
    },
    {
        name: 'DevOps',
        color: '#016DB8',
        children: [
            {
                name: 'AWS',
                hint: 'cloud computing',
                children: [
                    {
                        name: 'Rekognition',
                        hint: 'image recognition'
                    }
                ]
            },
            {
                name: 'Docker',
                hint: 'virtualization'
            },
            {
                name: 'Webpack',
                hint: 'module bundler'
            },
            {
                name: 'Lerna',
                hint: 'monorepo manager'
            }
        ]
    },
    {
        name: 'PHP',
        color: '#787CB4',
        children: [
            {
                name: 'Laravel',
                hint: 'Framework'
            },
            {
                name: 'Twig',
                hint: 'template engine'
            }
        ]
    },
    {
        name: 'Search',
        children: [
            {
                name: 'Typesense',
                hint: 'open source'
            },
            {
                name: 'Algolia',
                hint: 'proprietary'
            }
        ]
    },
    {
        name: 'CMS',
        children: [
            {
                name: 'Directus',
                hint: 'headless'
            },
            {
                name: 'Contao',
                hint: 'Symfony / PHP'
            },
            {
                name: 'Shopify',
                hint: 'e-commerce'
            },
            {
                name: 'WordPress',
                hint: 'until 2018',
                children: [
                    {
                        name: 'ACF',
                        hint: 'plugin'
                    }
                ]
            }
        ]
    },
    {
        name: 'Languages',
        children: [
            {
                name: 'German',
                hint: 'native'
            },
            {
                name: 'English',
                hint: 'fluent'
            },
            {
                name: 'Spanish',
                hint: 'intermediate'
            }
        ]
    },
    {
        name: 'Misc',
        children: [
            {
                name: 'Mapbox',
                hint: 'maps'
            },
            {
                name: 'IntelliJ',
                hint: 'preferred IDE'
            },
            {
                name: 'C#',
                hint: 'until 2015',
                children: [
                    {
                        name: 'ASP.NET',
                        hint: 'until 2015'
                    }
                ]
            },
            {
                name: 'Figma',
                hint: 'design'
            }
        ]
    }
]
