bittyReady() {
  document.querySelector("[data-send=signal_F1196]").click();
}

signal_F1196(ev, el) {
  if (ev.sender.dataset.needle === "value_F1196") {
    el.innerHTML = "test passed";
  }
}