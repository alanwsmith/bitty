[!- filter markdown|safe -!]
- Sends the initial font size to the slider via `initFontSize`. 
- The `b.setCSS()` call sets the CSS property on the pages `:root{}`.
- The `setSize` function uses `window.reqeustAnimationFrame()` to 
throttle the updates from the slider. 
[!- endfilter -!]



