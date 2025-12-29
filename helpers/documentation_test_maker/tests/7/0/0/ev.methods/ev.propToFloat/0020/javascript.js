  bittyReady() {
    this.api.querySelector("button").click();
  }

  $METHOD_NAME(ev, el) {
    const value = ev.propToFloat("bravo");
    if (value === 20.02) {
      el.innerHTML = "received float";
    }
  }
