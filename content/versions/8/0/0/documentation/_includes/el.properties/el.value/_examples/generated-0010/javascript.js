[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestElPropertiesElValue0010 = class {
  #incomingValue = null;

  bittyReady() {
    this.api.localTrigger("runElPropertiesElValue0010");
  }

  runElPropertiesElValue0010(_, el) {
    this.#incomingValue = el.value;
    this.api.localTrigger("runElPropertiesElValue0010Output");
  }

  runElPropertiesElValue0010Output(_, el) {
    el.innerHTML = this.#incomingValue;
  }

}
