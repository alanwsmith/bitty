signal_53E81(_, el) {
  if (el.loadDataAsFloat("needle") === 8.2) {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.trigger("signal_53E81");
}