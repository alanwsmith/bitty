  bittyReady() {
    this.api.querySelector("button").click();
  }

  $METHOD_NAME(ev, el) {
    const value = ev.propToInt("alfa");
    if (value === 2000) {
      el.innerHTML = "received integer";
    }
  }
