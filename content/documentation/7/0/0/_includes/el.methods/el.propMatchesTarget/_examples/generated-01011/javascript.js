[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: helpers/match_makers_without_el_key/make_tests.py

######################################### #]

window.TestpropMatchesTarget01011 = class {
  bittyReady() {
    this.api.querySelector("button").click();
  }
  propMatchesTargetMethod01011(_, el) {
    el.innerHTML = el.propMatchesTarget("test01011")
  }
}
