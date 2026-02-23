#key = "el_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  const result = this.createElement(this.#key, { misc: "not a valid input" });
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.trigger("test_$SIGNAL_NAME");
}