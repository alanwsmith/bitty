[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: helpers/match_makers_without_el_key/make_tests.py

######################################### #]

window.TestpropMatchesSender10110 = class {
  bittyReady() {
    this.api.querySelector("button").click();
  }
  propMatchesSenderMethod10110(_, el) {
    el.innerHTML = el.propMatchesTarget("test10110")
  }
}
