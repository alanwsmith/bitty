  bittyReady() {
    this.api.querySelector("button").click();
  }

  $METHOD_NAME(ev, el) {
    el.innerHTML = ev.propAsFloat("a-key-that-does-not-exist");
  }
