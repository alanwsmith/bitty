$SIGNAL_NAME(_, el) {
  if (el.isTarget() === true) {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  document.querySelector("#$STYLE_NAME").click();
}