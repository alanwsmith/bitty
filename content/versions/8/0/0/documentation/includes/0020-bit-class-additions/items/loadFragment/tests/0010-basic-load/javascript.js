

signal_5D60F(_, el) {
  this.loadFragment("el_5D60F");
  el.innerHTML = this.renderFragment("el_5D60F").firstChild.innerHTML;
}


bittyReady() {
  this.trigger("given_signal_5D60F");
}

given_signal_5D60F(_, __) {
  this.setLocalLogLevel("none");
  this.createFragment("el_5D60F", "<div>ok</div>");
  delete this._fragment["el_5D60F"];
  this.trigger("signal_5D60F");
}