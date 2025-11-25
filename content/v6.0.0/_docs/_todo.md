### Documentation To Add


- TODO: Cover `event.target` and `event.sender`
based on which element has the `data-send` 
attribute with it. (i.e. `event.target`
and `event.sender` are the same element if
the `event.target` has the `data-send` 
attribute. If it doesn't, and an ancestor
element with `data-send` is used, that ancestor
becomes `event.sender`

- TODO: Create a section for properties/methods
that are added to the elements that
are passed to the signal functions:

    - el.isSender

    - el.isTarget

    - el.bittyParent

    - el.bittyParentId

    - el.bittyId

    - el.getString(KEY) - 
    goes up the DOM looking for `data-key`
    Note that if you don't want to 
    traverse up you can always do
    `el.dataset.KEY` directly

    - el.getInt(KEY) - 
    goes up the DOM looking for `data-key`
    Note that if you don't want to 
    traverse up you can always do
    `el.dataset.KEY` directly

    - el.getFloat(KEY) - 
    goes up the DOM looking for `data-key`
    Note that if you don't want to 
    traverse up you can always do
    `el.dataset.KEY` directly


- `this.api.localTrigger()` only runs 
function inside the same bitty element
(i.e. no functions are called in ancestor
or child bitty elements)

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

