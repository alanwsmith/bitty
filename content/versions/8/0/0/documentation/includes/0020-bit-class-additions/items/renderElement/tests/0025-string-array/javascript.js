#key = "el_signal_317AA";

signal_317AA(_, el) {
  const subs = {
    "TARGET_317AA": ["o", "k"],
  };
  el.replaceWith(
    this.renderElement(this.#key, subs),
  );
}


bittyReady() {
  this.createElement(this.#key, `<div class="test">TARGET_317AA</div>`);
  this.trigger("signal_317AA");
}