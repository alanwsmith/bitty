  bittyReady() {
    this.api.querySelector("button").click();
  }

  $METHOD_NAME(ev, el) { 
    const got = ev.sender.propToFloat("alfa");
    if (got === 10.22) {
      el.innerHTML = "received float";
    }
  }

