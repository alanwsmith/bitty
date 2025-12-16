[# #########################################

do notE EDIT THis FILE MANUALLY
Use: make_el_prop_key_tests.py

######################################### #]

window.[@ item.name|title @][@ item.memberof|title @][@ supplemental_string @] = class {
  bittyReady() {
    this.api.querySelector("button").click();
  }
  [@ method_name @](_, el) {
    el.innerHTML = el.propMatchesTarget("target00000")
  }
}



