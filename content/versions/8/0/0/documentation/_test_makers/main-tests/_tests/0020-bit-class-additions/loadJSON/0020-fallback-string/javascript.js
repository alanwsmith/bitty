bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  localStorage.removeItem("data_$SIGNAL_NAME");
  this.trigger("test_$SIGNAL_NAME");
}

test_$SIGNAL_NAME(_, el) {
  const result = this.loadJSON("data_$SIGNAL_NAME", `{ "status": "ok" }`);
  if (result.ok === true) {
    el.innerHTML = this.json["data_$SIGNAL_NAME"].status;
  }
}