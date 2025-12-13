window.[@ item.name|title @][@ item.memberof|title @][@ supplemental_string @] = class {
  [@ method_name @](_, el) {
    if (el.bittyId !== undefined) {
      el.innerHTML = "has id";
    }
  }
}