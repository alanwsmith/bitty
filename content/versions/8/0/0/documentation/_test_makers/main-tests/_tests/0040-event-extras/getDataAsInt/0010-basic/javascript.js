$SIGNAL_NAME(ev, el) {
  if (ev.getDataAsInt("needle") === 1) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  document.querySelector("#$STYLE_NAME").click();
}