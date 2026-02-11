window.$CLASS_NAME = class {
  bittyReady() {
    document.querySelector(".$CLICK_CLASS").click();
  }

  $SIGNAL_NAME(ev, el) {
    el.innerHTML = "PASSED";
  }
};
