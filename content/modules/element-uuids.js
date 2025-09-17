export default class {
  update(event, el) {
    el.innerHTML = 
        `<div>From: ${event.target.dataset.uuid}</div>
        <div>To: ${el.dataset.uuid}</div>`
  }
}
