[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestEvMethodsEvPropasint0030 = class {
    bittyReady() {
    this.api.querySelector("button").click();
  }

  runEvMethodsEvPropasint0030(ev, el) {
    const value = ev.propAsInt("charlie");
    if (value === 3000) {
      el.innerHTML = "received integer";
    }
  }
}
