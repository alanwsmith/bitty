#key = "el_signal_F7F0A";

signal_F7F0A(_, el) {
  const subs = {
    "TARGET_F7F0A": [
      this.renderElement(`replace1_F7F0A`),
      this.renderElement(`replace2_F7F0A`),
    ],
  };
  el.replaceWith(
    this.renderElement(this.#key, subs),
  );
}


bittyReady() {
  this.createElement(this.#key, `<div>TARGET_F7F0A</div>`);
  this.createElement(`replace1_F7F0A`, `<div class="test">ok</div>`);
  this.createElement(`replace2_F7F0A`, `<div class="test">ok</div>`);
  this.trigger("signal_F7F0A");
}