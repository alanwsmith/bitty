signal_CE33E(_, el) {
  el.setData("updated", "test passed");
  this.trigger("verify_signal_CE33E");
}

verify_signal_CE33E(_, el) {
  el.innerHTML = el.getData("updated");
}


bittyReady() {
  this.trigger("signal_CE33E");
}