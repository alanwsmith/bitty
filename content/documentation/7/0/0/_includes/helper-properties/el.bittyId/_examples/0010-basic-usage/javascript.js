window.[@ item.name|title @][@ item.memberof|title @] = class {
  elBittyId(_, el) {
    el.innerHTML = el.bittyId;
  }
}
