  bittyReady() {
    this.api.localTrigger("$METHOD_NAME");
  }

  $METHOD_NAME(_, el) { 
    const got = el.propAsFloat("item");
    if (got === 10.01) {
      el.innerHTML = "received float";
    }
  }
