  bittyReady() {
    this.api.querySelector("button").click();
  }

  $METHOD_NAME(_, el) {
    const value = el.propToFloat("bravo");
    if (value === 20.02) {
      el.innerHTML = "received float";
    }
  }
