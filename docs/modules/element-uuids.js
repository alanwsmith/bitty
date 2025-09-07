export default class {
  update(el, event) {
    el.innerHTML = 
        `<div>From: ${event.target.dataset.uuid}</div>
        <div>To: ${el.dataset.uuid}</div>`
  }
}
