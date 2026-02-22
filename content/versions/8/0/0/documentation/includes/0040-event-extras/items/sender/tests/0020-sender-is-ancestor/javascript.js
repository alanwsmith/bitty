bittyReady() {
  document.querySelector("#id-8F115").click();
}

signal_8F115(ev, el) {
  if (ev.sender.dataset.needle === "value_8F115") {
    el.innerHTML = "ok";
  }
}