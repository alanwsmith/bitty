[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestElPropertiesElValuetofloat0020 = class {
    #incomingValue = null;

  bittyReady() {
   this.api.localTrigger("[@ method_name @]");
  }

  [@ method_name @](_, el) {
    this.#incomingValue = el.valueToFloat;
    this.api.localTrigger("[@ method_name @]Output");
  }

  [@ method_name @]Output(_, el) {
    el.innerHTML = this.#incomingValue;
  }
}
