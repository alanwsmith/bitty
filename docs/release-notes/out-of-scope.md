## Out of Scope

These items are out of scope for 
bitty:

- Adding a custom template library is
out of scope. 

- Including any given template library
directly in bitty is out of scope. 
(TODO: Confirm you can just call
one and use it from your class)

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

- I don't have a good way to do 
alert messages if a signal is set
that doesn't have a corresponding
method in the element because 
signals can be sent between bitty elements
with different classes that 
don't know about each other.
The result would just be a lot of
potential false errors. 

Elements could look at each other
for every event, but that
feels like too much. 


