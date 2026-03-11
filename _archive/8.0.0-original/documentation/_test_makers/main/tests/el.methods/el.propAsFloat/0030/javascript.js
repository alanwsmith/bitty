  bittyReady() {
    this.api.localTrigger("$METHOD_NAME");
  }

  $METHOD_NAME(_, el) {
    const value = el.propAsFloat("charlie");
    if (value === 30.03) {
      el.innerHTML = "received float";
    }
  }
