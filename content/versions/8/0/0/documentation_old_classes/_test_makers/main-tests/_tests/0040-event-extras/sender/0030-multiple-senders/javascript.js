bittyReady() {
  document.querySelector("#$ID_NAME").click();
}

$SIGNAL_NAME(ev, el) {
  if (ev.sender.dataset.needle === "value_$HASH") {
    el.innerHTML = "test passed";
  }
}

$SIGNAL2_NAME(ev, el) {
  if (ev.sender.dataset.needle === "value_$HASH-2") {
    el.innerHTML = "test passed";
  }
}

$SIGNAL3_NAME(ev, el) {
  if (ev.sender.dataset.needle === "value_$HASH-3") {
    el.innerHTML = "test passed";
  }
}