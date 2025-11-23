## Roadmap 

- TODO: Make stress test pages with tons
of nesting, elements, updates, etc...

- TODO: Consider: Adding `this.api.makeSVG()`
like `this.api.getSVG()` with all the
replacment stuff. 

- TODO: Consider: adding the state object that
has built-in `.isReady()` promise check. 
(Thinking about this a little more, I'm not
sure it makes sense for direct integration
because loading the data will be so
application specific.)


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

- TODO: Make sure to cover the removal of
elements and make sure listeners don't
explode. 

- TODO: Make sure that `data-receive="await:SIG"`
gets added at some point. 




