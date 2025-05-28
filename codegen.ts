
import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    overwrite: true,
    watch: true,
    schema: 'http://159.65.125.156:8061/graphql',
    documents: ['**/*.gql'],
    generates: {
        './schema.ts': {
            plugins: [
                'typescript',
                'typescript-resolvers',
                'typescript-operations',
                'typescript-urql'
            ],
            config: {
                preResolveTypes: false,
                useTypeImports: true,
                withMutationFn: true,
                typesPrefix: 'T',
                withHooks: false,
                addDocBlocks: true,
                dedupeFragments: true,
                omitOperationSuffix: true,
                avoidOptionals: true,
                maybeValue: 'T',
                namingConvention: {
                    typeNames: 'pascal-case#pascalCase',
                    transformUnderscore: true
                }
            }
        }
    }
}

export default config

