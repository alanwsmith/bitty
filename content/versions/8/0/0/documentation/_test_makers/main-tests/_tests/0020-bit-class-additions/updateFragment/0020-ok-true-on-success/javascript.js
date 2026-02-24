#key = "fragment_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  const result = this.updateFragment(this.#key, `<div>x</div><div>ok</div>`);
  if (result.ok === true && result.level === "info") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.trigger("$SIGNAL_NAME");
}