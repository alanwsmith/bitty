bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  localStorage.removeItem("data_$SIGNAL_NAME");
  this.trigger("$SIGNAL_NAME");
}

$SIGNAL_NAME(_, el) {
  const result = this.loadJSON("data_$SIGNAL_NAME", `{ "status": "test passed" }`);
  if (result.ok === true) {
    el.innerHTML = this.json["data_$SIGNAL_NAME"].status;
  }
}