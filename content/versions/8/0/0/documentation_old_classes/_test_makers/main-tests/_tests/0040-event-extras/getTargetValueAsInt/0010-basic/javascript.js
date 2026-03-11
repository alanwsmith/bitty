$SIGNAL_NAME(ev, el) {
  if (ev.getTargetValueAsInt("needle") === 9) {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  document.querySelector("#$STYLE_NAME").click();
}