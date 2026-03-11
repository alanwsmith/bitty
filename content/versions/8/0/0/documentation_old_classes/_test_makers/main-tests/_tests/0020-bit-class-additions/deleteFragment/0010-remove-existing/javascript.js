$SIGNAL_NAME(_, el) {
  this.deleteFragment("el_$HASH");
  if (this._fragment["el_$HASH"] === undefined) {
    el.innerHTML = "test passed";
  }
}


