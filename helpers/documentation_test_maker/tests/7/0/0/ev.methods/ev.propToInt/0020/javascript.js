  bittyReady() {
    this.api.querySelector("button").click();
  }

  $METHOD_NAME(ev, el) {
    const value = ev.propToInt("bravo");
    if (value === 7000) {
      el.innerHTML = "received integer";
    }
  }

