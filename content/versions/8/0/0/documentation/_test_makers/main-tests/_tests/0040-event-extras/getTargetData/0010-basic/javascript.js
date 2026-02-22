test_$SIGNAL_NAME(ev, el) {
  el.innerHTML = ev.getTargetData("needle");
}


bittyReady() {
  document.querySelector("#$STYLE_NAME").click();
}