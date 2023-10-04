---
sidebar_position: 2
---

# Event Handler voor Bans

Als je de ban systeem van WaveShield wilt gebruiken in je eigen code of scripts, dan kan je de code hieronder volgen.

```jsx title="/your/folder/banHandlerName.lua"
// Server side
AddEventHandler("__WaveShield_internal:playerBanned",function(source, data)
    // Je eigen functie
end)

AddEventHandler("__WaveShield_internal:playerKicked",function(source, data)
    // Je eigen functie
end)

//data = {
//    id = string -- ban id
//    name = string,
//    reason = string,
//    extended = string,
//    screenshot = string, -- (url)
//    identifiers = table, -- Alle speler identificaties
//    expires = number, -- Wanneer de ban verloopt (timestamp)
//}
```
