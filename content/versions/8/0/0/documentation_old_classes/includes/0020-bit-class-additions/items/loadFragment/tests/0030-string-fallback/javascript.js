signal_38302(_, el) {
  this.loadFragment("el_38302", `<div></div><div class="test">test passed</div>`);
  el.replaceWith(this.renderFragment("el_38302"));
}
