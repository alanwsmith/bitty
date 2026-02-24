#key = "fragment_signal_378AE";

signal_378AE(_, el) {
  // const subs = {
  //   "TARGET_378AE": ["o", "k"],
  // };
  // const fragment = this.renderFragment(this.#key, subs);
  // el.innerHTML = fragment.children[1].innerHTML;
}


bittyReady() {
  this.trigger("given_signal_378AE");
}

given_signal_378AE(_, __) {
  this.setLocalLogLevel("none");
  this.createFragment(this.#key, `<div></div><div>TARGET_378AE</div>`);
  this.trigger("signal_378AE");
}
