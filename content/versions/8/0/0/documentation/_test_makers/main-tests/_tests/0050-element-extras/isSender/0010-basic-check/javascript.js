$SIGNAL_NAME(_, el) {
  if (el.isSender() === true) {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  document.querySelector("#$STYLE_NAME").click();
}