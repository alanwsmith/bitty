// deno-fmt-ignore-file

export class Widget {

  $updateText(el, _) {
    const ts = Date.now()
    el.innerHTML = `Clicked at:<br>${ts}`
  }

}
