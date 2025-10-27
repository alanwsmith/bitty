## Out of Scope

These items are out of scope for 
bitty:

- Triggering signals from events on the 
`bitty` element itself. (e.g. `click` events). 
The purpose of the element is
as a wrapper that provides interactivity
to its child elements. Not to be a click
target itself. 

- Including the 
[History API](https://developer.mozilla.org/en-US/docs/Web/API/History)
in bitty's `this.api`.

- Including a `s = new State()` type object
to maintain state. That 
could be set up if folks want to do
it in their classes. It won't be included
in bitty directly. The `data-send` and
`data-receive` attributes can send
signals between components already. 
