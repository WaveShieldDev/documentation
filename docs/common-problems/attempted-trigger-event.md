---
sidebar_position: 1
---

# Attempted to trigger an event

If you encounter this erroneous ban, it may be due to the presence of code that overrides the TriggerServerEvent function. This code could potentially serve as an event protection system, for instance.

```jsx title="script.lua"
TriggerServerEvent = function(eventName, ...)
    local eventPayload = msgpack.pack({ ... })
    return a(0x7fdd1128, eventName, eventPayload, eventPayload:len())
end;
```

For instance, this code overwrites the TriggerServerEvent function and can result in false bans because it doesn't return the old function value; instead, it invokes it.