$SIGNAL_NAME(ev, el) {
  if (ev.getTarloadDataAsFloat("needle") === 3.4) {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  document.querySelector("#$STYLE_NAME").click();
}