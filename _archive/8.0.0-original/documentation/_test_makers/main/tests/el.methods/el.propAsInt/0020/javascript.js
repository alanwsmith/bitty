  bittyReady() {
    this.api.localTrigger("$METHOD_NAME");
  }

  $METHOD_NAME(_, el) {
    const value = el.propAsInt("bravo");
    if (value === 7000) {
      el.innerHTML = "received integer";
    }
  }

