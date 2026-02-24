$SIGNAL_NAME(ev, el) {
  if (ev.getTargetValueAsInt("needle") === 9) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  document.querySelector("#$STYLE_NAME").click();
}