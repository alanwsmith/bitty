window.[@ item.name|title @][@ item.memberof|title @][@ supplement_string @] = class {
  [@ method_name @](_, el) {
    const value = el.propToInt("alfa");
    if (value === 1000) {
      el.innerHTML = "received integer";
    }
  }
}

