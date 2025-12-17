  $METHOD_NAME(_, el) { 
    const got = el.propToFloat("item");
    if (got === 10.01) {
      el.innerHTML = "received float";
    }
  }
