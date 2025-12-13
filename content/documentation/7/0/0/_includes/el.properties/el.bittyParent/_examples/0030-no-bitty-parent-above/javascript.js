window.[@ item.name|title @][@ item.memberof|title @][@ supplemental_string @] = class {
  [@ method_name @](_, el) {
    if (el.bittyParent === null) {
      el.innerHTML = "null";
    }
    else {
      el.innerHTML = el.bittyParent;
    }
  }
}
