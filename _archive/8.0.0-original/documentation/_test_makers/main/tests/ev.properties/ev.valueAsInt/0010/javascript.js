  bittyReady() {
    this.api.querySelector("input").click();
  }

  $METHOD_NAME(ev, el) {
    if (ev.valueAsFloat === 3030) {
      el.innerHTML = "got int";
    }
  }
