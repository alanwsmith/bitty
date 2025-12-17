[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: helpers/match_makers_without_el_key/make_tests.py

######################################### #]

window.TestpropMatchesTarget11101 = class {
  bittyReady() {
    this.api.querySelector("button").click();
  }
  propMatchesTargetMethod11101(_, el) {
    el.innerHTML = el.propMatchesTarget("test11101")
  }
}
