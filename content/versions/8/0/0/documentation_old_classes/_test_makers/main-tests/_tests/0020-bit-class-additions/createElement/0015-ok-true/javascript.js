$SIGNAL_NAME(_, el) {
  const elementString = `<div></div>`;
  const result = this.createElement("el_$HASH", elementString);
  if (result.ok === true) {
    el.innerHTML = "test passed";
  }
}

