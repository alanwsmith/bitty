  $METHOD_NAME(_, el) {
    const value = el.propToInt("alfa");
    if (value === 2000) {
      el.innerHTML = "received integer";
    }
  }
