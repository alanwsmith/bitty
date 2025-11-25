### Documentation To Add


- Every child element of a [@ bitty_tag @] gets
a `data-bittyid` attribute with a UUID 
(regardless of if it has a `data-BITTYATTR` attr or not)

- Every elements added with `this.api.makeElement()`, 
`this.api.makeHTML()`, `this.api.getElement()`, or 
`this.api.getHTML()` gets a `data-bittyid` attribute 
with a UUID.

- Elements that are created outside
of `this.api` (e.g. with `document.createElement()`
don't get `data-bittyid` attrs automatically. 
They have to be added manually if
they are needed. 

- Note that the element is set to be a block
with a `this.style.dispay = "block"` call. 

- Note that `data-init` attrs are only processed
when the bitty element loads. (i.e. if you 
add new elements with `this.api.makeElement()`, etc...
that have `data-init`, they won't fire. The 
idea is that if you're adding an element
you just take care of everything at that
point directly.)

- NOTE: TODO: Verify this: 
If there's a data-receive that's
nested under multiple bitty elements that
all have the same signal name, every bitty
element will fire its own version of the
function. 

- NOTE: Removing `el` elements can 
be done with standard calls directly
on the element. 

