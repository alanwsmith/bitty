
  $METHOD_NAME(_, el) {
    const value = el.propToInt("bravo");
    if (value === 7000) {
      el.innerHTML = "received integer";
    }
  }

