#key = "element_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  const result = this.updateElement(this.#key, `<div></div>`);
  if (result.ok === true && result.level === "info") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLogLevel("none");
  this.createElement(this.#key, `<div class="test">bug</div>`);
  this.trigger("test_$SIGNAL_NAME");
}