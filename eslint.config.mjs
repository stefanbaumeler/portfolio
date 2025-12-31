import { defineConfig, globalIgnores } from 'eslint/config'

import { config as sbBaseConfig } from '@sb-lint/eslint-config-base'
import { config as sbTsConfig } from '@sb-lint/eslint-config-ts'
import { config as sbReactConfig } from '@sb-lint/eslint-config-react'
import { config as sbGqlConfig } from '@sb-lint/eslint-config-gql'
import { config as sbJsonConfig } from '@sb-lint/eslint-config-json'

export default defineConfig([
    ...sbBaseConfig,
    ...sbTsConfig,
    ...sbReactConfig,
    ...sbGqlConfig,
    ...sbJsonConfig,
    globalIgnores(['schema.ts']),
    {
        files: ['**/*.tsx', '**/*.ts']
    }
])
