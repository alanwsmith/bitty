  [@ method_name @](_, el) {
    const value = el.propToFloat("charlie");
    if (value === 30.03) {
      el.innerHTML = "received float";
    }
  }
