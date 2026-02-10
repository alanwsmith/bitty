  bittyReady() {
    this.api.localTrigger("$METHOD_NAME");
  }

  $METHOD_NAME(_, el) {
    const value = el.propAsFloat("bravo");
    if (value === 20.02) {
      el.innerHTML = "received float";
    }
  }
