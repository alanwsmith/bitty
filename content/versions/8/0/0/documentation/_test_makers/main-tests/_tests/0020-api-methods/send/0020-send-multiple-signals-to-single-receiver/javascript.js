window.$CLASS_NAME = class {
  bittyReady() {
    this.api.send(
      { status: "ok" },
      `$SIGNAL_NAME $SIGNAL2_NAME $SIGNAL3_NAME`,
    );
  }

  $SIGNAL_NAME(ev, el) {
    el.innerHTML = `alfa-$${ev.payload.status}`;
  }

  $SIGNAL2_NAME(ev, el) {
    el.innerHTML = `$${el.innerHTML}-bravo-$${ev.payload.status}`;
    console.log(el.innerHTML);
  }

  $SIGNAL3_NAME(ev, el) {
    if (ev.payload.status === "ok" && el.innerHTML === "alfa-ok-bravo-ok") {
      el.innerHTML = "ok";
    }
  }
};
