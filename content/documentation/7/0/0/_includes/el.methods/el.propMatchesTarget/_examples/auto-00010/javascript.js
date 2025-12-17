[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: helpers/match_makers_without_el_key/make_tests.py

######################################### #]

window.TestpropMatchesTarget00010 = class {
  bittyReady() {
    this.api.querySelector("button").click();
  }
  propMatchesTargetMethod00010(_, el) {
    el.innerHTML = el.propMatchesTarget("test00010")
  }
}
