[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestEvMethodsEvProptofloat0010 = class {
    bittyReady() {
    this.api.querySelector("button").click();
  }

  runEvMethodsEvProptofloat0010(ev, el) { 
    const got = ev.propToFloat("alfa");
    if (got === 10.01) {
      el.innerHTML = "received float";
    }
  }
}
