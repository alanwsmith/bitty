$SIGNAL_NAME(ev, el) {
  if (ev.getValueAsFloat() === 2.2) {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  document.querySelector("#$STYLE_NAME").click();
}