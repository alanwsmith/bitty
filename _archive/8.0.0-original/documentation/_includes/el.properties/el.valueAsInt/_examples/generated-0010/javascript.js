[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestElPropertiesElValueasint0010 = class {
  #incomingValue = null;

  bittyReady() {
    this.api.trigger("[@ method_name @]");
  }

  [@ method_name @](_, el) {
    this.#incomingValue = el.valueAsInt;
    this.api.localTrigger("[@ method_name @]Output");
  }

  [@ method_name @]Output(_, el) {
    el.innerHTML = this.#incomingValue;
  }
}
