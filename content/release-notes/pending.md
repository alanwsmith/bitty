## Pending

Items most likely to make it into the next
release. 

- TODO: Added namespacing capabilities. 
Signals can be prefixed with a string
followed by a ``.`` where the string
becomes a namespace identifier. 


- TODO: Do a network test where you have
100 classes in a single file that's used
by multiple elments to see what the
network traffic and caching does. 

- TODO: Do a network test where you have
100 of the same element making the same
data-connect call to a remote file
to see what the network traffic 
and caching does. 


- TODO: CONSIDER: `.addDataSend(someEl, SIGNALS)` 
and `.addDataReceive(someEl, SIGNALS)` 
which would let you update an existing elements
`data-send` and `data-recieve` with new signals
(creating the attributes if they don't already exist)
Example: `this.api.addDataReceive("signal", codeBlock);`

    Existing signals would remain on the elements. 


- TODO: CONSIDER: `.removeDataSend(someEl, SIGNALS)`
and `.removeDataReceive(someEl, SIGNALS)` which take
signals off the respective `data-*` attributes. 
    
    Multiple signals can be removed. 

    It's not necessary to add `await:` on the
    removal for a signal. Only the name
    is required. If the source signal has
    an await it gets removed regardless. 


- TODO: Added `this.api.getQuickXXX()` 
methods that correspond to `this.api.getXXX()`
methods. The difference is that they
return a payload regardless of if the
fetch fails or not. If the fetch 
succeeds, it's returned directly. If
it fails, an alternate error payload
is returned along with an error message
that goes to the console. 


- TODO: Added `this.api.getCSS()` which is just an
alias to `this.api.getTXT()` but helps with the
mental model that fits with the other `this.api.getXXX()`
methods. 


- TODO: Added a feature to the subs for `this.api.getXXX`
where if the first value is a string it just
alternates the subs without having to do
a nested array. 


- TODO: Added `this.api.localForward(EVENT, SIGNAL)` which only 
forwards inside the current module in the
same way `this.api.localTrigger(SIGNAL)`
works. 


- TODO: Added `el.setProp(KEY, VALUE)` which 
is shorthand for adding a corresponding 
`data-KEY` attribute to the `VALUE`
to the element. 

- TODO: CONSIDER: Added `ev.setProp(KEY, VALUE)` which 
is shorthand for adding a corresponding 
`data-KEY` attribute to the `VALUE`
to the `event.target`. (This would 
keep the APIs consistent, but need
to thing through the implication of
adjusting the `.target`)

- TODO: CONSIDER: Added `ev.sender.setProp(KEY, VALUE)` which 
is shorthand for adding a corresponding 
`data-KEY` attribute to the `VALUE`
to the `event.sender`. (This would 
keep the APIs consistent, but need
to thing through the implication of
adjusting the `.sender`)


- TODO: CONFIRM: Documented behavior of `el.bittyId`
if the element was added outside the
`this.api...` methods (i.e. that
`.bittyId` properties are only added when
elements and fragments are created 
via `this.api...` methods. Anything
created with `document.createElement()`
won't get them automatically)
