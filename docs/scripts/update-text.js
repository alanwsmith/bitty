// deno-fmt-ignore-file

export default class {
  #counter = 0;

  updateText(el, _) {
    el.innerHTML = "This is the new text";
  }
}
