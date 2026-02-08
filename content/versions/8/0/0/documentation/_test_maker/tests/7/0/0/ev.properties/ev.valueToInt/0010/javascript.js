  bittyReady() {
    this.api.querySelector("input").click();
  }

  $METHOD_NAME(ev, el) {
    if (ev.valueToFloat === 3030) {
      el.innerHTML = "got int";
    }
  }
