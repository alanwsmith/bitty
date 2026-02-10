[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestEvMethodsEvPropasfloat0030 = class {
  bittyReady() {
    this.api.querySelector("button").click();
  }

  runEvMethodsEvPropasfloat0030(ev, el) {
    const value = ev.propAsFloat("charlie");
    if (value === 30.03) {
      el.innerHTML = "received float";
    }
  }
}
