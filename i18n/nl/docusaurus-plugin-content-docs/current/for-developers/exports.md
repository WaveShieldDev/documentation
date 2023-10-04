---
sidebar_position: 1
---

# Exports

Dit zijn de momentele exports die worden ondersteund door WaveShield.

```jsx title="/your/folder/banFileName.lua"
// Van de client side
exports["WaveShield"]:banPlayer(reason, extended, duration)

// Van de server side
// @source: De player ID van de server(Server ID)
// @extended: Extra details voor de ban.
// @duration: Ban tijd in seconden.
exports["WaveShield"]:banPlayer(source, reason, extended, "Main", duration)
```

```jsx title="/your/folder/unbanFileName.lua"
// Van de server side
// @banId: De Ban ID om te unbannen
// @reason: Unban reden (optineel)
// @from: Wie heeft hem geunband? (optineel)
exports["WaveShield"]:unbanPlayer(banId, reason, from)
```
