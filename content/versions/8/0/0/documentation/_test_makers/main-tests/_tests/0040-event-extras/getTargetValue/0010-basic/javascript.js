$SIGNAL_NAME(ev, el) {
  if (ev.getTargetValue("needle") === "value_$HASH") {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  document.querySelector("#$STYLE_NAME").click();
}