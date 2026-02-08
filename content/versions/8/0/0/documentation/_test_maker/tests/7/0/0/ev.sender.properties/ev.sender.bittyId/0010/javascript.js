  bittyReady() {
    this.api.querySelector("button").click();
  }

  $METHOD_NAME(ev, el) {
    if (ev.sender.bittyId !== undefined) {
      el.innerHTML = "has id";
    }
  }
