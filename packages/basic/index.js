module.exports = {
  extends: [
    // Use the Standard config as the base
    // https://github.com/stylelint/stylelint-config-standard
    'stylelint-config-standard',
    // Enforce a standard order for CSS properties
    // https://github.com/stormwarning/stylelint-config-recess-order
    'stylelint-config-recess-order',
    // Override rules to allow linting of CSS modules
    // https://github.com/pascalduez/stylelint-config-css-modules
    'stylelint-config-css-modules'
  ],
  rules: {
    'number-leading-zero': 'always',
    'number-no-trailing-zeros': null,
    // Enforce camelCase for classes and ids, to work better
    // with CSS modules
    'selector-class-pattern': /^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/,
    'selector-id-pattern': /^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/,
    // Limit the number of universal selectors in a selector,
    // to avoid very slow selectors
    'selector-max-universal': 1
  }
}