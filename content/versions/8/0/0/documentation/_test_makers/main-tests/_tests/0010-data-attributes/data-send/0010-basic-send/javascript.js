$SIGNAL_NAME(_, el) {
  el.innerHTML = "passed";
}

bittyReady() {
  document.querySelector("[data-send=$SIGNAL_NAME]").click();
}
