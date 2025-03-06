---
sidebar_position: 2
---

# Event Handler for Bans

If you want to use the ban system from WaveShield, in your own scripts/own system, you can follow the code down below.

```jsx title="/your/folder/banHandlerName.lua"
// Server side
AddEventHandler("__WaveShield_internal:playerBanned",function(source, data)
    // your function
end)

AddEventHandler("__WaveShield_internal:playerKicked",function(source, data)
    // your function
end)

AddEventHandler("__WaveShield_internal:playerUnbanned", function(banId, data, unbanReason, from)
    // your function
end)

// data = {
//     id = string -- ban id
//    name = string,
//     reason = string,
//    extended = string,
//    screenshot = string, -- (url)
//    identifiers = table, -- all player identifiers
//    expires = number, -- when the ban expires (timestamp)
//}
```
