[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: helpers/match_makers_without_el_key/make_tests.py

######################################### #]

window.$CONNECTION = class {
  bittyReady() {
    this.api.querySelector("button").click();
  }
  $METHOD_NAME(_, el) {
    el.innerHTML = el.propMatchesTarget("$MATCH_KEY")
  }
}
