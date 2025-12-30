  bittyReady() {
    this.api.querySelector("button").click();
  }

  $METHOD_NAME(ev, el) {
    el.innerHTML = ev.sender.prop("$KEY1")
  }

