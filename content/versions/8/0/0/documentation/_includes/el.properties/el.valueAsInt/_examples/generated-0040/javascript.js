[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestElPropertiesElValueasint0040 = class {
    #incomingValue = null;

  bittyReady() {
    this.api.localTrigger("runElPropertiesElValueasint0040");
  }

  runElPropertiesElValueasint0040(_, el) {
    this.#incomingValue = el.valueAsInt;
    this.api.localTrigger("runElPropertiesElValueasint0040Output");
  }

  runElPropertiesElValueasint0040Output(_, el) {
    el.innerHTML = this.#incomingValue;
  }

}
