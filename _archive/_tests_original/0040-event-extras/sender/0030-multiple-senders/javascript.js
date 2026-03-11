window.$CLASS_NAME = class {
  bittyReady() {
    document.querySelector("#$ID_NAME").click();
  }

  $SIGNAL_NAME(ev, el) {
    if (ev.sender.dataset.needle === "value_$HASH") {
      el.innerHTML = "ok";
    }
  }

  $SIGNAL2_NAME(ev, el) {
    if (ev.sender.dataset.needle === "value_$HASH-2") {
      el.innerHTML = "ok";
    }
  }

  $SIGNAL3_NAME(ev, el) {
    if (ev.sender.dataset.needle === "value_$HASH-3") {
      el.innerHTML = "ok";
    }
  }
};
