

signal_31065(_, el) {
  // const replacementEl = document.createElement("div");
  // replacementEl.innerHTML = "ok";
  // const subs = {
  //   "TARGET_31065": replacementEl,
  // };
  // const fragment = this.renderFragment("el_31065", subs);
  // el.innerHTML = fragment.firstChild.firstChild.innerHTML;
}


bittyReady() {
  this.trigger("given_signal_31065");
}

given_signal_31065(_, __) {
  this.setLocalLogLevel("none");
  this.createFragment("el_31065", `<div>TARGET_31065</div>`);
  this.trigger("signal_31065");
}
