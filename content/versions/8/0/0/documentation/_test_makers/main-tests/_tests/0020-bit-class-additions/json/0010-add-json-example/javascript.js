bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.trigger("test_$SIGNAL_NAME");
}

test_$SIGNAL_NAME(_, el) {
//  el.innerHTML = this.json["data_$SIGNAL_NAME"].status;
}
