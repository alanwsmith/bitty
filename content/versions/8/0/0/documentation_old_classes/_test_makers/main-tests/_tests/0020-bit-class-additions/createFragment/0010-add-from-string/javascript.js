$SIGNAL_NAME(_, el) {
  this.createFragment("el_$HASH", `<div>x</div><div>test passed</div>`);
  el.innerHTML = this.renderFragment("el_$HASH").children[1].innerHTML;
}
