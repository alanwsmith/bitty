//#key = "el_signal_EE7C0";

test_signal_EE7C0(_, el) {
  const elementString = `<div>ok</div>`;
  const result = this.createElement("el_EE7C0", elementString);
  if (result.ok === true) {
    el.innerHTML = "ok";
  }
}

