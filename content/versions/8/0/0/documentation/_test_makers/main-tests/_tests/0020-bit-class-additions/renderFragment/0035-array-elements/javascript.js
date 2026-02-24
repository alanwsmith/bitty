#key = "fragment_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  // const replacementEl = document.createElement("div");
  // replacementEl.innerHTML = "ok";
  // const replacementEl2 = document.createElement("div");
  // replacementEl2.innerHTML = "ok";
  // const replacementArray = [
  //   replacementEl,
  //   replacementEl2,
  // ];
  // const subs = {
  //   "TARGET_$HASH": replacementArray,
  // };
  // const fragment = this.renderFragment(this.#key, subs);
  // el.innerHTML = fragment.firstChild.children[1].innerHTML;
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.setLocalLogLevel("none");
  this.createFragment(this.#key, `<div>TARGET_$HASH</div>`);
  this.trigger("$SIGNAL_NAME");
}
