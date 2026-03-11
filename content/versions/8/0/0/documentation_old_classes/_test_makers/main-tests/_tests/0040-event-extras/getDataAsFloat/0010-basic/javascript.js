$SIGNAL_NAME(ev, el) {
  if (ev.loadDataAsFloat("needle") === 1.1) {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  document.querySelector("#$STYLE_NAME").click();
}