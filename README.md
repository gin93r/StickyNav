# StickyNav
A simple [jQuery](http://jquery.com/) plugin for a sticky nav (or element)

### Usage
```
/*css */
.sticky
{
    max-width: 1000px;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
}
```
```
// js
$("selector").StickyNav(options);
```

### Options
`stickAt ` {int} _default 1:_ Element will apply the "stick" class as soon as the window is scrolled.

`stickClass` {string} _default sticky:_ The css class to add to element when it is stuck. 

`onStick` {function} _default empty:_ Called when the nav sticks.

`onUnStick` {function} _default empty:_ Called when the nav reverts.