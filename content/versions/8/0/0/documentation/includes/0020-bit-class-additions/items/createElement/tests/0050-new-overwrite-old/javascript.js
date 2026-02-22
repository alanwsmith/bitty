#key = "el_signal_374D9";

test_signal_374D9(_, el) {
  const result = this.createElement(this.#key, "<div>ok</div>");
  if (result.level === "warn" && result.ok === true) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLogLevel("none");
  this.createElement(this.#key, "<div>bug</div>");
  this.trigger("test_signal_374D9");
}