Change the event listeners the component uses. 

Availability: `<[@ config.tag_name @]>` elements: yes - child elements: no

bitty listens for `click` and `input` events on its child
elements by default. Other listeners can be used
by setting them with the `data-listeners` attribute. 

For example, to switch to listening for the mouse
entering elements:

    data-listeners="mouseenter"

Multiple listeners are separated by a pipe:

    data-listeners="mouseenter|mouseleave"

Using `data-listeners` sets the listeners explicitly. 
That is, `click` and `input` are removed unless
you add them back in:

    data-listeners="mouseenter|mouseleave|click|input"

Turning off all listeners can be done by
passing an empty string:

    data-listeners=""

