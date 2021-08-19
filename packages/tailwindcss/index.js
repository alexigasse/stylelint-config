module.exports = {
  extends: ['@alexigasse'],
  plugins: [
    // Bring in some extra rules for SCSS
    'stylelint-scss'
  ],
  rules: {
    'no-empty-source': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          // Tailwind.css
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'layer',

          // SCSS
          'mixin',
          'include',
          'if',
          'else'
        ]
      }
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
    'selector-pseudo-element-colon-notation': 'single'
  }
}