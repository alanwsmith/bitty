[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: helpers/match_makers_without_el_key/make_tests.py

######################################### #]

window.TestpropMatchesSender01110 = class {
  bittyReady() {
    this.api.querySelector("button").click();
  }
  propMatchesSenderMethod01110(_, el) {
    el.innerHTML = el.propMatchesTarget("test01110")
  }
}
