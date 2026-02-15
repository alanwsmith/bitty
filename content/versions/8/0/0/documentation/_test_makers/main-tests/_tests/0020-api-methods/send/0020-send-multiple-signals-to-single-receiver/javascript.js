window.$CLASS_NAME = class {
  bittyReady() {
    this.api.send(
      { status: "ok" },
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
    if (payload.status === "ok" && el.innerHTML === "alfa-ok-bravo-ok") {
      el.innerHTML = "ok";
    }
  }
};
