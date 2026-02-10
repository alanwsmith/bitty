[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestEvMethodsEvPropasfloat0040 = class {
    bittyReady() {
    this.api.querySelector("button").click();
  }

  runEvMethodsEvPropasfloat0040(ev, el) {
    el.innerHTML = ev.propAsFloat("a-key-that-does-not-exist");
  }
}
