  bittyReady() {
    this.api.querySelector("button").click();
  }

  $METHOD_NAME(ev, el) {
    const value = ev.propAsInt("charlie");
    if (value === 3000) {
      el.innerHTML = "received integer";
    }
  }
