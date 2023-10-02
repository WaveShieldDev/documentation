---
sidebar_position: 2
---

# Event Handler for Bans

If you want to use the ban system from WaveShield, in your own scripts/own system, you can follow the code down below.

```jsx title="/your/folder/banHandlerName.lua"
// Server side
AddEventHandler("__WaveShield_internal:playerBanned",function(source, data)
    // Your Own Function
end)

AddEventHandler("__WaveShield_internal:playerKicked",function(source, data)
    // Your Own Function
end)

//data = {
//    id = string -- ban id
//    name = string,
//    reason = string,
//    extended = string,
//    screenshot = string, -- (url)
//    identifiers = table, -- All player identifiers
//    expires = number, -- When the ban expires (timestamp)
//}
```