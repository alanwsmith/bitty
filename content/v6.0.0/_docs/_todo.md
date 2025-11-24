### Documentation To Add

- `this.api.localTrigger()` only runs 
function inside the same bitty element
(i.e. no functions are called in ancestor
or child bitty elements)

- Document: data-send is not available on the
bitty object itself. That's what `bittyInit()`
in the class is for. 

- Every child element of a [@ bitty_tag @] gets
a `data-bittyid` attribute with a UUID. 

- Every elements added with `this.api.makeElement()`, 
`this.api.makeHTML()`, `this.api.getElement()`, or 
`this.api.getHTML()` gets a `data-bittyid` attribute 
with a UUID.

- Any element created outside the API need to have
`data-bittyid` attributes added manually if they need
to be used to send events (e.g. `click` or `input`)

- Elements that are created outside
of `this.api` (e.g. with `document.createElement()`
don't get `data-bittyid` attrs automatically. 
They have to be added manually if
they are needed. 

- Note that `bittyCatch` is there for events
that don't have a good way to define them 
via listeners. (I think one example was
some message passing events)

- Note that the element is set to be a block. 

- Note that `data-init` attrs are only processed
when the bitty element loads. (i.e. if you 
add new elements with `this.api.makeElement()`, etc...
that have `data-init`, they won't fire. The 
idea is that if you're adding an element
you just take care of everything at that
point directly. 

- Note that `data-send` on a `bitty-#-#` tag
only goes

- NOTE that if there's a data-receive that's
nested under multiple bitty elements that
all have the same signal name, every bitty
element will fire its own version of the
function. 

- NOTE that bitty can use `data-send` now.




