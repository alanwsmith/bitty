$SIGNAL_NAME(_, el) {
  el.setData("updated", "test passed");
  this.trigger("verify_$SIGNAL_NAME");
}

verify_$SIGNAL_NAME(_, el) {
  el.innerHTML = el.loadData("updated");
}


bittyReady() {
  this.trigger("$SIGNAL_NAME");
}