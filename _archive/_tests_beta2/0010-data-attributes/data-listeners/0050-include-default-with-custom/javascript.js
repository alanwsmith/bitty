window.$CLASS_NAME = class {
  bittyReady() {
    const testSender = document.querySelector(".$CLICK_CLASS").click();
  }

  $SIGNAL_NAME(_, el) {
    el.innerHTML = "ok";
  }
};
