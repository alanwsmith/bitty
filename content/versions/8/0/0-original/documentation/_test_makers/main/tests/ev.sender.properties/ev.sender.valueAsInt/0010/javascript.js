  bittyReady() {
    this.api.querySelector("input").click();
  }

  $METHOD_NAME(ev, el) {
    if (ev.sender.valueAsFloat === 3131) {
      el.innerHTML = "got int";
    }
  }
