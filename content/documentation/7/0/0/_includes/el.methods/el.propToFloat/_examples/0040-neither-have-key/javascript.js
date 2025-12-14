window.[@ item.name|title @][@ item.memberof|title @][@ supplemental_string @] = class {
  [@ method_name @](_, el) {
    el.innerHTML = el.propToFloat("[@ target_name @]");
  }
}

