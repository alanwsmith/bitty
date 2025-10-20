## Out of Scope

These items are out of scope for 
bitty:

- Triggering signals from events on the 
`bitty` element itself. (e.g. `click` events). 
The purpose of the element is
as a wrapper that provides interactivity
to its child elements. Not to be a click
target itself. 

- Working with the 
[History API](https://developer.mozilla.org/en-US/docs/Web/API/History)

- Pretty much anything that can be 
added as an external function once
`data-functions` is in place. 

- Using a `s = new State()` type object
to send signals when it updates. That 
could be set up if folks want to do
it in there classes. It won't be included
in bitty directly. The `data-send` and
`data-receive` attributes can send
signals between components already. 
