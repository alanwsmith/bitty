test_$SIGNAL_NAME(_, el) {
  if (el.isTarget() === true) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  document.querySelector("#$STYLE_NAME").click();
}