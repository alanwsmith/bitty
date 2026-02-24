signal_53E81(_, el) {
  if (el.getDataAsFloat("needle") === 8.2) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("signal_53E81");
}