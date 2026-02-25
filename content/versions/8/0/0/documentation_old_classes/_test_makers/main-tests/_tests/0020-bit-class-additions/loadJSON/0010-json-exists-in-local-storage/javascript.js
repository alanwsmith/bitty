$SIGNAL_NAME(_, el) {
  this.loadJSON("data_$HASH");
  el.innerHTML = this.json.data_$HASH.status;
}

