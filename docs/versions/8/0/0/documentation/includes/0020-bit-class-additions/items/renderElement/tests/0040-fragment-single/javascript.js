#key = "el_signal_00B6E";

signal_00B6E(_, el) {
  const subs = {
    "TARGET_00B6E": this.renderFragment(`replacement_00B6E`),
  };
  el.replaceWith(
    this.renderElement(this.#key, subs),
  );
}


bittyReady() {
  this.createElement(this.#key, `<div>TARGET_00B6E</div>`);
  this.createFragment(
    `replacement_00B6E`,
    `<div class="test">ok</div><div class="test">ok</div>`,
  );
  this.trigger("signal_00B6E");
}