$SIGNAL_NAME(ev, el) {
  if (ev.getValue() === "value_$HASH") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  document.querySelector("#$STYLE_NAME").click();
}