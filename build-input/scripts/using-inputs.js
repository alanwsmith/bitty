// deno-fmt-ignore-file

export default class {
  #counter = 0;

  updateText(el, event) {
    el.innerHTML = event.target.value;
  }
}

