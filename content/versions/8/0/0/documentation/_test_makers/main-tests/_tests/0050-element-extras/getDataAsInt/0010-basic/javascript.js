$SIGNAL_NAME(_, el) {
  if (el.getDataAsInt("needle") === 3030) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("$SIGNAL_NAME");
}