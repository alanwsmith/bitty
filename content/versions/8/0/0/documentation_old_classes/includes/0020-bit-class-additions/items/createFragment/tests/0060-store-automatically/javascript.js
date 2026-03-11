signal_C87DB(_, el) {
  this.createFragment("el_C87DB", `<div class="test">test passed</div>`);
  delete this._fragment["el_C87DB"];
  const result = this.loadFragment("el_C87DB");
  el.replaceWith(this.renderFragment("el_C87DB"));
}
