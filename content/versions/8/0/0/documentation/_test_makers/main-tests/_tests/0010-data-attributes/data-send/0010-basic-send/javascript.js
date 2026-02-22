window.$CLASS_NAME = class {
  bittyReady() {
    document.querySelector("[data-send=$SIGNAL_NAME]").click();
  }

  $SIGNAL_NAME(_, el) {
    el.innerHTML = "ok";
  }
};
