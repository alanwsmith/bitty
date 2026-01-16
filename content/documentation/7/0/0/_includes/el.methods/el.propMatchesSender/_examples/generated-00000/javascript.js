[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: helpers/match_makers_without_el_key/make_tests.py

######################################### #]

window.TestpropMatchesSender00000 = class {
  bittyReady() {
    this.api.querySelector("button").click();
  }
  propMatchesSenderMethod00000(_, el) {
    el.innerHTML = el.propMatchesTarget("test00000")
  }
}
