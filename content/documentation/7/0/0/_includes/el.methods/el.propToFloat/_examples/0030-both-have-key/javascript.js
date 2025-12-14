window.[@ item.name|title @][@ item.memberof|title @][@ supplemental_string @] = class {
  [@ method_name @](_, el) {
    const value = el.propToFloat("charlie");
    if (value === [@ target_value @]) {
      el.innerHTML = "received float";
    }
  }
}

