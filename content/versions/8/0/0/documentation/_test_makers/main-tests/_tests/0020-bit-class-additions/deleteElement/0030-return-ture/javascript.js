$SIGNAL_NAME(_, el) {
  const result = this.deleteElement("el_$HASH");
  if (result.ok === true) {
    el.innerHTML = "test passed";
  }
}


