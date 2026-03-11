[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use the document test maker python script


######################################### #]

window.TestElPropertiesElValuetofloat0010 = class {
  #incomingValue = null;

  [@ method_name @](_, el) {
    this.#incomingValue = el.valueToFloat;
    this.api.localTrigger("[@ method_name @]Output");
  }

  [@ method_name @]Output(_, el) {
    if (this.#incomingValue === 10.01) {
      el.innerHTML = "received float";
    }
  }}
