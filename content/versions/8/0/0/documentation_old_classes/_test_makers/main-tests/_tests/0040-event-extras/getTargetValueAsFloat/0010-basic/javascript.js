$SIGNAL_NAME(ev, el) {
  if (ev.getTargetValueAsFloat("needle") === 7.8) {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  document.querySelector("#$STYLE_NAME").click();
}