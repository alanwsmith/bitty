$SIGNAL_NAME(_, el) {
  const jsonString = `{}`;
  const result = this.createJSON("el_$HASH", jsonString);
  if (result.ok === true) {
    el.innerHTML = "test passed";
 }
}
