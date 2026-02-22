signal_ABF58(_, el) {
  el.innerHTML = "passed";
}

bittyReady() {
  document.querySelector("[data-send=signal_ABF58]").click();
}
