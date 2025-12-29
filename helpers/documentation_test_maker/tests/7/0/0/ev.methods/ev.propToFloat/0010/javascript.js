  bittyReady() {
    this.api.querySelector("button").click();
  }

  $METHOD_NAME(ev, el) { 
    const got = el.propToFloat("item");
    if (got === 10.01) {
      el.innerHTML = "received float";
    }
  }
