signal_66809(_, el) {
  el.innerHTML = el.getData("needle");
}


bittyReady() {
  this.trigger("signal_66809");
}