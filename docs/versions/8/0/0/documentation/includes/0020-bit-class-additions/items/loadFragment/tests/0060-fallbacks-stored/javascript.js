

signal_D027C(fallbackFragment, el) {
  this.loadFragment("el_D027C");
  el.innerHTML = this.renderFragment("el_D027C").firstChild.innerHTML;
}


bittyReady() {
  this.trigger("given_signal_D027C");
}

given_signal_D027C(_, __) {
  this.setLocalLogLevel("none");
  this.deleteFragment("el_D027C");
  this.loadFragment("el_D027C", "<div>ok</div>");
  delete this._fragment["el_D027C"];
  this.trigger("signal_D027C");
}