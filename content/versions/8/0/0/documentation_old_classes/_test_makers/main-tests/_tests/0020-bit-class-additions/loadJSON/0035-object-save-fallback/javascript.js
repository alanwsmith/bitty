$SIGNAL_NAME(_, el) {
  this.setLocalLogLevel("none");
  this.deleteJSON("data_$SIGNAL_NAME");
  const fallback = { status: "test passed" };
  this.loadJSON("data_$SIGNAL_NAME", fallback);
  delete this.json.data_$SIGNAL_NAME;
  this.loadJSON("data_$SIGNAL_NAME");
  el.innerHTML = this.json.data_$SIGNAL_NAME.status;
}

