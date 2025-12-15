window.[@ item.name|title @][@ item.memberof|title @][@ supplemental_string @] = class {
  [@ method_name @](_, el) {
    const value = el.propToFloat("TODO: Add Specific Value");
    if (value === 10.01) {
      el.innerHTML = "received float";
    }
  }
}


