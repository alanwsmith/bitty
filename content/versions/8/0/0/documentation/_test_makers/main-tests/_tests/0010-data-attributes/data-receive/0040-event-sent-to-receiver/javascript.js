window.$CLASS_NAME = class {
  bittyReady() {
    document.querySelector("#$CLICK_CLASS").click();
  }

  $SIGNAL_NAME(ev, el) {
    if (ev.target.id === "$CLICK_CLASS") {
      el.innerHTML = "ok";
    }
  }
};
