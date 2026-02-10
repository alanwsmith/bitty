  bittyReady() {
    this.api.querySelector("input").click();
  }

  $METHOD_NAME(ev, el) {
    if (ev.sender.valueAsFloat === 72.72) {
      el.innerHTML = "got float";
    }
  }
