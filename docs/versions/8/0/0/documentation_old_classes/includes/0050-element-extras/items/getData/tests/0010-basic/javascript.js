signal_66809(_, el) {
  el.innerHTML = el.loadData("needle");
}


bittyReady() {
  this.trigger("signal_66809");
}