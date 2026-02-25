bittyReady() {
  this.send(
    { status: "test passed" },
    `$SIGNAL_NAME $SIGNAL2_NAME $SIGNAL3_NAME`,
  );
}

$SIGNAL_NAME(payload, el) {
  el.innerHTML = `alfa-$${payload.status}`;
}

$SIGNAL2_NAME(payload, el) {
  el.innerHTML = `$${el.innerHTML}-bravo-$${payload.status}`;
}

$SIGNAL3_NAME(payload, el) {
  if (payload.status === "test passed" && el.innerHTML === "alfa-ok-bravo-ok") {
    el.innerHTML = "test passed";
  }
}