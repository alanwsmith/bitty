//#key = "el_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  const elementString = `<div>ok</div>`;
  const result = this.createElement("el_$HASH", elementString);
  if (result.ok === true) {
    el.innerHTML = "ok";
  }
}

