  bittyReady() {
    this.api.querySelector("button").click();
  }

  $METHOD_NAME(ev, el) {
    const value = ev.sender.propToInt("alfa");
    if (value === 2020) {
      el.innerHTML = "received integer";
    }
  }
