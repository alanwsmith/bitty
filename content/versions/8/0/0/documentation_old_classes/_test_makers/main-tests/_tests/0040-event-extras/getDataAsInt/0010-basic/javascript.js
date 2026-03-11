$SIGNAL_NAME(ev, el) {
  if (ev.loadDataAsInt("needle") === 1) {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  document.querySelector("#$STYLE_NAME").click();
}