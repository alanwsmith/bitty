window.[@ item.name|title @][@ item.memberof|title @][@ supplemental_string @] = class {
  #incomingValue = null;

  [@ method_name @](_, el) {
    this.#incomingValue = el.valueToFloat;
    this.api.localTrigger("[@ method_name @]Output");
  }

  [@ method_name @]Output(_, el) {
    el.innerHTML = this.#incomingValue;
  }
}