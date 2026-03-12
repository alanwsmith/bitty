[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use the document test maker python script


######################################### #]

window.TestElPropertiesElValuetoint0010 = class {
    #incomingValue = null;

  [@ method_name @](_, el) {
    this.#incomingValue = el.valueToInt;
    this.api.localTrigger("[@ method_name @]Output");
  }

  [@ method_name @]Output(_, el) {
    el.innerHTML = this.#incomingValue;
  }
}
