// deno-fmt-ignore-file

export default class {

  updateText(el, _event) {
    const ts = Date.now();
    el.innerHTML = `Clicked at:<br>${ts}`;
  }

}
