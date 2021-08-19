module.exports = {
  extends: ['@alexigasse'],
  rules: {
    // Add Vue transition class name
    'selector-class-pattern': /^([a-z][a-z0-9]*)(-[a-z0-9]+)*(-(enter|leave)(-(active|to))?)?$/,
    // Ignore v-deep
    'selector-pseudo-element-no-unknown': [true, {
      ignorePseudoElements: ['v-deep']
    }]
  }
}