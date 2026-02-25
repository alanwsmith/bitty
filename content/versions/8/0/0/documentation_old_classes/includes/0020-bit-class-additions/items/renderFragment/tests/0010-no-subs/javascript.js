signal_FC310(_, el) {
  this.createFragment("fragment_FC310", `<div></div><div class="test">test passed</div>`);
  const fragment = this.renderFragment("fragment_FC310");
 el.replaceWith(this.renderFragment("fragment_FC310"));
}
