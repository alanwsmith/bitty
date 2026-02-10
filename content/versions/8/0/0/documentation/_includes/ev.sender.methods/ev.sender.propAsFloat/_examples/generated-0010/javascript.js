[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestEvSenderMethodsEvSenderPropasfloat0010 = class {
    bittyReady() {
    this.api.querySelector("button").click();
  }

  runEvSenderMethodsEvSenderPropasfloat0010(ev, el) { 
    const got = ev.sender.propAsFloat("alfa");
    if (got === 10.22) {
      el.innerHTML = "received float";
    }
  }

}
