

signal_3BC5E(element, el) {
  const result = this.loadFragment("el_3BC5E");
  el.innerHTML = this.renderFragment("el_3BC5E").firstChild.innerHTML;
}


bittyReady() {
  this.trigger("given_signal_3BC5E");
}

given_signal_3BC5E(_, __) {
  this.deleteFragment("el_3BC5E");
  this.updateFragment("el_3BC5E", `<div>ok</div>`);
  delete this._fragment["el_3BC5E"];
  this.trigger("signal_3BC5E");
}