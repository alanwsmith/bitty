

signal_38302(_, el) {
  this.loadFragment("el_38302", `<div></div><div>ok</div>`);
  el.innerHTML = this.renderFragment("el_38302").children[1].innerHTML;
}


bittyReady() {
  this.trigger("given_signal_38302");
}

given_signal_38302(_, __) {
  this.setLocalLogLevel("none");
  this.deleteFragment("el_38302");
  this.trigger("signal_38302");
}