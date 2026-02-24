signal_A3FE1(_, el) {
  this.setLocalLogLevel("info");
  const fallback = { status: "test passed" };
  this.loadJSON("data_signal_A3FE1", fallback);
  delete this.json.data_signal_A3FE1;
  this.loadJSON("data_signal_A3FE1");
  console.log(this.json.data_signal_A3FE1);
  el.innerHTML = this.json.data_signal_A3FE1.status;
}
