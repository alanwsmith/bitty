  bittyReady() {
    this.api.querySelector("button").click();
  }

  $METHOD_NAME(ev, el) {
    const value = ev.sender.propAsInt("alfa");
    if (value === 2020) {
      el.innerHTML = "received integer";
    }
  }
