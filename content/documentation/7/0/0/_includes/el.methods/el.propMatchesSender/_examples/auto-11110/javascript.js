[# #########################################

do notE EDIT THis FILE MANUALLY
Use: helpers/match_makers_without_el_key/make_tests.py

######################################### #]

window.[@ item.name|title @][@ item.memberof|title @][@ supplemental_string @] = class {
  bittyReady() {
    this.api.querySelector("button").click();
  }
  [@ method_name @](_, el) {
    el.innerHTML = el.propMatchesTarget("target11110")
  }
}


