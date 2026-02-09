  bittyReady() {
    this.api.localTrigger("$METHOD_NAME");
  }

  $METHOD_NAME(_, el) {
    const value = el.propToInt("charlie");
    if (value === 3000) {
      el.innerHTML = "received integer";
    }
  }
