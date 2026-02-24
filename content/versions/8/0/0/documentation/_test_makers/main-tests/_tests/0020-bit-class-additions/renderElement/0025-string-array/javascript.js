#key = "el_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  const subs = {
    "TARGET_$HASH": ["o", "k"],
  };
  el.replaceWith(
    this.renderElement(this.#key, subs),
  );
}


bittyReady() {
  this.createElement(this.#key, `<div class="test">TARGET_$HASH</div>`);
  this.trigger("$SIGNAL_NAME");
}