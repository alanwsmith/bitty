$SIGNAL_NAME(ev, el) {
  if (ev.getTargetDataAsInt("needle") === 4) {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  document.querySelector("#$STYLE_NAME").click();
}