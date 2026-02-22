test_signal_3BBCF(_, el) {
  if (el.getDataAsInt("needle") === 3030) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("test_signal_3BBCF");
}