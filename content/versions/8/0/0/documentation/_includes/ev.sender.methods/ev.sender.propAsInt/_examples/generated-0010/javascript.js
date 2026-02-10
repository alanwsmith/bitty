[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestEvSenderMethodsEvSenderPropasint0010 = class {
    bittyReady() {
    this.api.querySelector("button").click();
  }

  runEvSenderMethodsEvSenderPropasint0010(ev, el) {
    const value = ev.sender.propAsInt("alfa");
    if (value === 2020) {
      el.innerHTML = "received integer";
    }
  }
}
