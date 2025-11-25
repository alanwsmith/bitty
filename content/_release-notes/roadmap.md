## Roadmap 

- TODO: Add disconnectedCallback() to do cleanup
if a bitty element is removed. 

- TODO: Make stress test pages with
nesting, large numbers of elements, updates, etc...

- TODO: Consider: Adding `this.api.makeSVG()`
like `this.api.getSVG()` with all the
replacement stuff. 

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

- TODO: Make sure to cover the removal of
elements and make sure listeners don't
explode. 

- TODO: Document behavior of `el.bittyId`
if the element was added outside the
`this.api...` methods and doesn't have an
id. 


