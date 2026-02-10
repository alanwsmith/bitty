[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestEvMethodsEvPropasint0050 = class {
    bittyReady() {
    this.api.querySelector("button").click();
  }

  runEvMethodsEvPropasint0050(ev, el) {
    el.innerHTML = ev.propAsInt("delta")
  }
}
