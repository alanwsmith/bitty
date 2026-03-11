signal_2C4FE(_, el) {
  this.createFragment("el_2C4FE", `<div>x</div><div>test passed</div>`);
  el.innerHTML = this.renderFragment("el_2C4FE").children[1].innerHTML;
}
