bittyReady() {
  this.send(
    { status: "ok" },
    `signal_20C90 signal_20C90_2 signal_20C90_3`,
  );
}

signal_20C90(payload, el) {
  el.innerHTML = `alfa-${payload.status}`;
}

signal_20C90_2(payload, el) {
  el.innerHTML = `${el.innerHTML}-bravo-${payload.status}`;
}

signal_20C90_3(payload, el) {
  if (payload.status === "ok" && el.innerHTML === "alfa-ok-bravo-ok") {
    el.innerHTML = "ok";
  }
}