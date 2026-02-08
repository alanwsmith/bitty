[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestEvSenderMethodsEvSenderProptofloat0010 = class {
    bittyReady() {
    this.api.querySelector("button").click();
  }

  runEvSenderMethodsEvSenderProptofloat0010(ev, el) { 
    const got = ev.sender.propToFloat("alfa");
    if (got === 10.22) {
      el.innerHTML = "received float";
    }
  }

}
