

$SIGNAL_NAME(_, el) {
  // const replacementEl = document.createElement("div");
  // replacementEl.innerHTML = "test passed";
  // const subs = {
  //   "TARGET_$HASH": replacementEl,
  // };
  // const fragment = this.renderFragment("el_$HASH", subs);
  // el.innerHTML = fragment.firstChild.firstChild.innerHTML;
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.setLocalLogLevel("none");
  this.createFragment("el_$HASH", `<div>TARGET_$HASH</div>`);
  this.trigger("$SIGNAL_NAME");
}
