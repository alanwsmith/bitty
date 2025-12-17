[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: helpers/match_makers_without_el_key/make_tests.py

######################################### #]

window.TestpropMatchesSender11100 = class {
  bittyReady() {
    this.api.querySelector("button").click();
  }
  propMatchesSenderMethod11100(_, el) {
    el.innerHTML = el.propMatchesTarget("test11100")
  }
}
