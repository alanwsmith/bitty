Change the event listeners the component uses. For example:

    data-listeners="mouseenter"

Multiple listeners are separated by a pipe:

    data-listeners="mouseenter|mouseleave"

The default listeners are 'click' and 'input'. Using
`data-listeners` overrides them complete. If
you need them along with the alternate listeners
they must be included.

    data-listeners="mouseenter|mouseleave|click|input"

Turning off all listeners can be done by
passing an empty string

    data-listeners=""

