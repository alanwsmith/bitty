## Roadmap 

- TODO: Make stress test pages with tons
of nesting, elements, updates, etc...

- TODO: Consider: Adding `this.api.makeSVG()`
like `this.api.getSVG()` with all the
replacment stuff. 

- TODO: Consider: next major version: 
change `<bitty-#-# data-send="SIGNAL">`
`<bitty-#-# data-init="SIGNAL">` since
that key exists now and is a little
more inline with the functionality. 

- TODO: Consider: `this.api.getData("KEY")`
which would get a data key either in the 
element or pull from the first ancestor
that has it. (After some initial consideration
this isn't something to implement at this
point. Need more interactions to see
if something like this can be done in
generic enough of a way that it makes
sense without adding a bunch of overhead. 

- TODO: Consider: adding the state object that
has built-in `.isReady()` promise check. 
(Thinking about this a little more, I'm not
sure it makes sense for direct integration
because loading the data will be so
application specific.)

- TODO: Set up so `this.api.trigger()` can 
make multiple calls (e.g. `this.api.trigger("alfa bravo")`)
(I think this is already in place, just
need to confirm)

- TODO: Investigate: Added a `disconnectedCallback()`
to clean up anything that can be
removed when a component is removed.

- TODO: Set up the `bitty` tag to listen
for signals with `data-receive` to allow
for things like completely switching out
the contents of the component without
having to rely on a child element calling
`.parentNode`. 

- TODO: Consider: Adding a method
to elements so you can do `el.getData(el, KEY)`, 
which gets the `data-KEY` value of an
elements attribute or goes up the tree
to the DOM root for ancestors to find
the first one that's available. Result
would be a payload with either 
`{ value: 'the-value'}` or `{ error: PAYLOAD}`
(or maybe just null if it doesn't get 
it?)

  Should also have: `el.getDataInt(KEY)`
  and `el.getDataFloat()`.

  Could also add the mend to the 
  events?

  This feels like maybe a little
  more complexisty for the event, 
  but the element might make sense
  especially since the `.getDataInt`
  version would do the explict
  conversion for you. 

  The element level would also 
  allow for children to call up to
  a parent to get a value. 





