

signal_C09FC(_, el) {
  const result = this.updateFragment("el_C09FC", {
    key: "not a string, element, or document fragment",
  });
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("given_signal_C09FC");
}

given_signal_C09FC(_, __) {
  this.setLocalLogLevel("none");
  this.trigger("signal_C09FC");
}