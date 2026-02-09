  bittyReady() {
    this.api.querySelector("input").click();
  }

  $METHOD_NAME(ev, el) {
    if (ev.sender.valueToFloat === 3131) {
      el.innerHTML = "got int";
    }
  }
