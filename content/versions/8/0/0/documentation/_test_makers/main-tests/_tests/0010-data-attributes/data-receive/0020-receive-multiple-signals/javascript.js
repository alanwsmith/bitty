#updates = [];


$SIGNAL_NAME(_, el) {
  this.#updates.push("bug");
  el.innerHTML = this.#updates[0];
}

$SIGNAL2_NAME(_, el) {
  this.#updates.push("bug");
  el.innerHTML = this.#updates[1];
}

$SIGNAL3_NAME(_, el) {
  if (this.#updates.length === 2) {
    el.innerHTML = "ok";
  }
}
