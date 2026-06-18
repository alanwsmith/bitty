# bitty - a bit of interactivity

bitty is a web component for making
reactive web pages. Details are
at: [bitty.alanwsmith.com](https://bitty.alanwsmith.com/)

## Build Process

The site is built with a custom 
static site builder (called `ssb`). 
It's not bundled with bitty and
not set up for other folks to use it
(i.e. there's no practical way 
for you to build the site). 

The test suite is built into the
site itself. Collectively, that makes
it impractical for other folks to
work on bitty. Depending on how
the project goes, I may address
that, but it's not currently 
on the priority list. 

## Dev Notes

- The minified versions of bitty are generated
with [Terser](https://try.terser.org/).

- The main dev notes are stored under:

```
/dev/
```

