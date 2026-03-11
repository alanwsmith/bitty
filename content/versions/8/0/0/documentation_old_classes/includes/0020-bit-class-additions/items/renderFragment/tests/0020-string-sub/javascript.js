signal_1BEA7(_, el) {
  this.createFragment("el_1BEA7", `<div></div><div>TARGET_1BEA7</div>`);
  const subs = {
    "TARGET_1BEA7": "test passed",
  };
  const fragment = this.renderFragment("el_1BEA7", subs);
  el.innerHTML = fragment.children[1].innerHTML;
}
