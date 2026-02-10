  bittyReady() {
    this.api.querySelector("button").click();
  }


  $METHOD_NAME(ev, el) {
    el.innerHTML = ev.propAsFloat("echo")
  }
