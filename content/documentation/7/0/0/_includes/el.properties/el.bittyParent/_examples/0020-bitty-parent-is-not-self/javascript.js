window.[@ item.name|title @][@ item.memberof|title @][@ supplemental_string @] = class {
  [@ method_name @](_, el) {
    if (el.bittyParent.dataset.bittyid) {
      el.innerHTML = el.bittyParent.dataset.bittyid !== el.bittyId;
    }
  }
}

window.[@ item.name|title @][@ item.memberof|title @][@ supplemental_string @]Wrapper = class {
  // wrapper class to check for test
}