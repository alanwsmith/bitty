[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: helpers/match_makers_without_el_key/make_tests.py

######################################### #]

  bittyReady() {
    this.api.querySelector("button").click();
  }
  [@ method_name @](_, el) {
    el.innerHTML = el.propMatchesTarget("$MATCH_KEY")
  }

