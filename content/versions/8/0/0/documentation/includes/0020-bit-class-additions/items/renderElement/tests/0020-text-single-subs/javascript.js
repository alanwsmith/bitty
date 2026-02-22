#key = "el_signal_3ECFF";

test_signal_3ECFF(_, el) {
  const subs = {
    "TARGET_3ECFF": "ok",
  };
  el.replaceWith(
    this.renderElement(this.#key, subs),
  );
}


bittyReady() {
  this.createElement(this.#key, `<div class="test">TARGET_3ECFF</div>`);
  this.trigger("test_signal_3ECFF");
}