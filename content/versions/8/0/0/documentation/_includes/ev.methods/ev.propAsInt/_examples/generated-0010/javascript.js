[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestEvMethodsEvPropasint0010 = class {
  bittyReady() {
    this.api.querySelector("button").click();
  }

  runEvMethodsEvPropasint0010(ev, el) {
    const value = ev.propAsInt("alfa");
    if (value === 2000) {
      el.innerHTML = "received integer";
    }
  }
}
