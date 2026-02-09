[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestElPropertiesElValuetoint0040 = class {
    #incomingValue = null;

  bittyReady() {
    this.api.localTrigger("runElPropertiesElValuetoint0040");
  }

  runElPropertiesElValuetoint0040(_, el) {
    this.#incomingValue = el.valueToInt;
    this.api.localTrigger("runElPropertiesElValuetoint0040Output");
  }

  runElPropertiesElValuetoint0040Output(_, el) {
    el.innerHTML = this.#incomingValue;
  }

}
