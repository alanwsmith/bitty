test_$SIGNAL_NAME(ev, el) {
  if (ev.getTargetDataAsFloat("needle") === 3.4) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  document.querySelector("#$STYLE_NAME").click();
}