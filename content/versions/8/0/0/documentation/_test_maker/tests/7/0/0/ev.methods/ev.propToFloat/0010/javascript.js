  bittyReady() {
    this.api.querySelector("button").click();
  }

  $METHOD_NAME(ev, el) { 
    const got = ev.propToFloat("alfa");
    if (got === 10.01) {
      el.innerHTML = "received float";
    }
  }
