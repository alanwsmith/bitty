$SIGNAL_NAME(ev, el) {
  if (ev.getTargetDataAsInt("needle") === 4) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  document.querySelector("#$STYLE_NAME").click();
}