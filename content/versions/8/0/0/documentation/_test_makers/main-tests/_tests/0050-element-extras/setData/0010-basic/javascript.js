$SIGNAL_NAME(_, el) {
  el.setData("updated", "ok");
  this.trigger("verify_$SIGNAL_NAME");
}

verify_$SIGNAL_NAME(_, el) {
  el.innerHTML = el.getData("updated");
}


bittyReady() {
  this.trigger("$SIGNAL_NAME");
}