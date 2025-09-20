export default class {
  update(event, element) {
    element.innerHTML = 
        `<div>From: ${event.target.dataset.uuid}</div>
        <div>To: ${el.dataset.uuid}</div>`
  }
}
