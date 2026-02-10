  bittyReady() {
    this.api.querySelector("button").click();
  }

  $METHOD_NAME(ev, el) {
    const value = ev.propAsFloat("charlie");
    if (value === 30.03) {
      el.innerHTML = "received float";
    }
  }
