[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestEvMethodsEvPropasint0020 = class {
    bittyReady() {
    this.api.querySelector("button").click();
  }

  runEvMethodsEvPropasint0020(ev, el) {
    const value = ev.propAsInt("bravo");
    if (value === 7000) {
      el.innerHTML = "received integer";
    }
  }

}
