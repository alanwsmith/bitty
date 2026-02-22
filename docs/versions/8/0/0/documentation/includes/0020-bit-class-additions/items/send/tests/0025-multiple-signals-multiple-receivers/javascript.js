bittyReady() {
  this.send(
    { status: "ok" },
    `signal_CE3AE signal_CE3AE_2 signal_CE3AE_3`,
  );
}

signal_CE3AE(payload, el) {
  el.innerHTML = payload.status;
}

signal_CE3AE_2(payload, el) {
  el.innerHTML = payload.status;
}

signal_CE3AE_3(payload, el) {
  el.innerHTML = payload.status;
}