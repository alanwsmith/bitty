  bittyReady() {
    this.api.querySelector("input").click();
  }

  $METHOD_NAME(ev, el) {
    el.innerHTML = ev.sender.value;
  }
