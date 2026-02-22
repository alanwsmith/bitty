bittyReady() {
  document.querySelector("#$CLICK_CLASS").click();
}

$SIGNAL_NAME(_, __) {
  this.trigger("verify_$SIGNAL_NAME");
}

verify_$SIGNAL_NAME(_, el) {
  el.innerHTML = "ok";
}