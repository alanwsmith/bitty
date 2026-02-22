test_$SIGNAL_NAME(ev, el) {
  if (ev.getTargetValueAsFloat("needle") === 7.8) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  document.querySelector("#$STYLE_NAME").click();
}