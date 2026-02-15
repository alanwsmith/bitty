window.$CLASS_NAME = class {
  bittyReady() {
    this.api.send(
      { status: "ok" },
      `$SIGNAL_NAME $SIGNAL2_NAME $SIGNAL3_NAME`,
    );
  }

  $SIGNAL_NAME(ev, el) {
    el.innerHTML = ev.payload.status;
  }

  $SIGNAL2_NAME(ev, el) {
    el.innerHTML = ev.payload.status;
  }

  $SIGNAL3_NAME(ev, el) {
    el.innerHTML = ev.payload.status;
  }
};
