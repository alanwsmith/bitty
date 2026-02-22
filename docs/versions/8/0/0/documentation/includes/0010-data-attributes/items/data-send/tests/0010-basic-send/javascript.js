bittyReady() {
  document.querySelector("[data-send=signal_ABF58]").click();
}

signal_ABF58(_, el) {
  el.innerHTML = "ok";
}

