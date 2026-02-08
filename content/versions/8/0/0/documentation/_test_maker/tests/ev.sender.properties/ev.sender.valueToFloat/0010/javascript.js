  bittyReady() {
    this.api.querySelector("input").click();
  }

  $METHOD_NAME(ev, el) {
    if (ev.sender.valueToFloat === 72.72) {
      el.innerHTML = "got float";
    }
  }
