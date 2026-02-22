#key = "fragment_signal_D2EBD";

test_signal_D2EBD(_, el) {
  const result = this.createFragment(this.#key, `<div>x</div><div>ok</div>`);
  if (result.ok === true && result.level === "info") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("test_signal_D2EBD");
}