---
sidebar_position: 2
---

# Trigger Server Events

If you are experiencing false ban issues related to our automatic event protection, here's how to fix them so you can use this awesome feature.
    - Make sure you don't use any other type of "event protection", "anti-trigger", etc. You'll need to remove  the resources that interfere with the event system (or disable the option if you can).
    - Make sure you have no code at all that overrides the TriggerServerEvent & TriggerLatentServerEvent functions, that will also need to be removed, here is an example of what it can looks like.

```lua title="script.lua"
TriggerServerEvent = function(eventName, ...)
    local eventPayload = msgpack.pack({ ... })
    return a(0x7fdd1128, eventName, eventPayload, eventPayload:len())
end;
```
    - If you still have this issue after you checked this, then you will probably need to whitelist the event because your script is surely made in C# or JS and WaveShield event protection is only working for LUA scripts at the moment.

:::danger
PLEASE IN ANY CASE DON'T ADD THE SCRIPT THAT CAUSE THE ISSUE TO THE IGNORED SCRIPTS BUT FIX THE PROBLEM THROUGH THIS PAGE.
:::