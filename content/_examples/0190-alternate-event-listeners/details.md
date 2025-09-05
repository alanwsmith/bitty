- bitty-js default to listening for
"click" and "input" events. Switching
to a different set of listeners is done
with the `data-listeners` attribute. 

  TODO: determine if "change" should
  be added to the defaults. 

- Note that using the `data-listeners` attribute
removes the default "click" and "input" listeners.
Add them back in if you need them. For example:

  `data-listeners="mouseover|mouseout|click|input"`