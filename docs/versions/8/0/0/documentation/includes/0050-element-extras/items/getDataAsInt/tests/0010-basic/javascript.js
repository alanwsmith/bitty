signal_3BBCF(_, el) {
  if (el.getDataAsInt("needle") === 3030) {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.trigger("signal_3BBCF");
}