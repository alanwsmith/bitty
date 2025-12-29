  bittyReady() {
    this.api.querySelector("button").click();
  }

  $METHOD_NAME(_, el) {
    if (el.bittyId !== undefined) {
      el.innerHTML = "has id";
    }
  }
