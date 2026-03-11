signal_3BBCF(_, el) {
  if (el.loadDataAsInt("needle") === 3030) {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.trigger("signal_3BBCF");
}