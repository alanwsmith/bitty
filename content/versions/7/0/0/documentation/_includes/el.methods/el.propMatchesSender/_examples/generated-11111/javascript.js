[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: helpers/match_makers_without_el_key/make_tests.py

######################################### #]

window.TestpropMatchesSender11111 = class {
  bittyReady() {
    this.api.querySelector("button").click();
  }
  propMatchesSenderMethod11111(_, el) {
    el.innerHTML = el.propMatchesTarget("test11111")
  }
}
