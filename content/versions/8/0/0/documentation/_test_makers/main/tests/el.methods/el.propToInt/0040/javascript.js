  bittyReady() {
    this.api.localTrigger("$METHOD_NAME");
  }

  $METHOD_NAME(_, el) {
    el.innerHTML = el.propToInt("delta");
  }
