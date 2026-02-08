[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestEvSenderMethodsEvSenderProptoint0010 = class {
    bittyReady() {
    this.api.querySelector("button").click();
  }

  runEvSenderMethodsEvSenderProptoint0010(ev, el) {
    const value = ev.sender.propToInt("alfa");
    if (value === 2020) {
      el.innerHTML = "received integer";
    }
  }
}
