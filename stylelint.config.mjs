export default {
    extends: [
        'stylelint-config-sass-guidelines'
    ],
    rules: {
        '@stylistic/indentation': [4, {
            'baseIndentLevel': 1,
            'severity': 'warning'
        }],
        'selector-pseudo-element-colon-notation': 'single',
        'selector-pseudo-element-no-unknown': true,
        'selector-class-pattern': [
            '^[a-z0-9\\-_]+$',
            {
                'message': 'Selector should be written in lowercase with hyphens or underlines (selector-class-pattern)'
            }
        ],
        'max-nesting-depth': null,
        'selector-no-qualifying-type': null,
        'color-hex-length': 'long',
        '@stylistic/max-line-length': [120, {}],
        'scss/percent-placeholder-pattern': '^[a-z]+([a-z0-9-]+)?$',
        '@stylistic/number-leading-zero': 'never',
        '@stylistic/color-hex-case': 'upper'
    }
}
