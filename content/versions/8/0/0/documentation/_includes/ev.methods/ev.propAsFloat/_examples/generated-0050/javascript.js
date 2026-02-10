[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestEvMethodsEvPropasfloat0050 = class {
  bittyReady() {
    this.api.querySelector("button").click();
  }


  runEvMethodsEvPropasfloat0050(ev, el) {
    el.innerHTML = ev.propAsFloat("echo")
  }
}
