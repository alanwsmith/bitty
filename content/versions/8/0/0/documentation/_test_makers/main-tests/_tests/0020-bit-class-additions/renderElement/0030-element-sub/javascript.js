#key = "el_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  const replacementEl = document.createElement("div");
  replacementEl.classList.add("test");
  replacementEl.innerHTML = "ok";
  const subs = {
    "TARGET_$HASH": replacementEl,
  };
  el.replaceWith(
    this.renderElement(this.#key, subs),
  );
}


bittyReady() {
  this.createElement(this.#key, `<div>TARGET_$HASH</div>`);
  this.trigger("test_$SIGNAL_NAME");
}