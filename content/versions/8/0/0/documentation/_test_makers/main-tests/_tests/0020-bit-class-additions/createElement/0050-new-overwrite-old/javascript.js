#key = "el_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  const result = this.createElement(this.#key, "<div>ok</div>");
  if (result.level === "warn" && result.ok === true) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLogLevel("none");
  this.createElement(this.#key, "<div>bug</div>");
  this.trigger("test_$SIGNAL_NAME");
}