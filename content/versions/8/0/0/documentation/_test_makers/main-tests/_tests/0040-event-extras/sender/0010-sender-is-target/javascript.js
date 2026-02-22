bittyReady() {
  document.querySelector("[data-send=$SIGNAL_NAME]").click();
}

$SIGNAL_NAME(ev, el) {
  if (ev.sender.dataset.needle === "value_$HASH") {
    el.innerHTML = "ok";
  }
}