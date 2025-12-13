window.[@ item.name|title @][@ item.memberof|title @][@ supplemental_string @] = class {
  [@ method_name @](_, el) { 
    const got = el.propToFloat("item");
    if (got === 10.01) {
      el.innerHTML = "received float";
    }
  }
}

