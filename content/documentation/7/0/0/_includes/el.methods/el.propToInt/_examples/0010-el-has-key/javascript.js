window.[@ item.name|title @][@ item.memberof|title @][@ supplemental_string @] = class {
  [@ method_name @](_, el) {
    const value = el.propToInt("alfa");
    if (value === [@ target_value @]) {
      el.innerHTML = "received integer";
    }
  }
}

