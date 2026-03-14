<ul>
<li>Sends the initial font size to the slider via <code>initFontSize</code>.</li>
<li>The <code>b.setCSS()</code> call sets the CSS property on the pages <code>:root{}</code>.</li>
<li>The <code>setSize</code> function uses <code>window.reqeustAnimationFrame()</code> to
throttle the updates from the slider.</li>
</ul>