test_$SIGNAL_NAME(ev, el) {
  if (ev.getTargetValue("needle") === "value_$HASH") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  document.querySelector("#$STYLE_NAME").click();
}