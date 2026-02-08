[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestEvPropertiesEvBittyid0010 = class {
    bittyReady() {
    this.api.querySelector("button").click();
  }

  runEvPropertiesEvBittyid0010(_, el) {
    if (el.bittyId !== undefined) {
      el.innerHTML = "has id";
    }
  }
}
