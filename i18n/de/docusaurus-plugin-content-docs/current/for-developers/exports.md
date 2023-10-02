---
sidebar_position: 1
---

# Exports

These are the current exports supported by WaveShield.

```jsx title="/your/folder/banFileName.lua"
// From the client side
exports["WaveShield"]:banPlayer(reason, extended, duration)

// From the server side
// @source: The player source(Server ID)
// @extended: Additional details to the ban.
// @duration: The ban duration in seconds.
exports["WaveShield"]:banPlayer(source, reason, extended, "Main", duration)
```

```jsx title="/your/folder/unbanFileName.lua"
// From the server side
// @banId: The Ban ID to unban
// @reason: Unban reason (Optional)
// @from: Who unbanned him? (Optional)
exports["WaveShield"]:unbanPlayer(banId, reason, from)
```
