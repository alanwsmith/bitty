// deno-fmt-ignore-file

export class Wires {

  $updateText(el, _) {
    const ts = Date.now();
    el.innerHTML = `Clicked at:<br>${ts}`;
  }

}
