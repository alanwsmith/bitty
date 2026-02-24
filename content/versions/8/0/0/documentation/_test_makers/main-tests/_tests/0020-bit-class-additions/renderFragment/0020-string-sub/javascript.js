

$SIGNAL_NAME(_, el) {
  // const subs = {
  //   "TARGET_$HASH": "test passed",
  // };
  // const fragment = this.renderFragment("el_$HASH", subs);
  // el.innerHTML = fragment.children[1].innerHTML;
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.setLocalLogLevel("none");
  this.createFragment("el_$HASH", `<div></div><div>TARGET_$HASH</div>`);
  this.trigger("$SIGNAL_NAME");
}
