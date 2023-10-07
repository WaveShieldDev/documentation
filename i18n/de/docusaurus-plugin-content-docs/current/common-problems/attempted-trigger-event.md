---
sidebar_position: 1
---

# Attempted to trigger an event

Wenn Sie auf diesen fehlerhaften Ban stoßen, kann dies auf das Vorhandensein von Code zurückzuführen sein, der die Funktion TriggerServerEvent außer Kraft setzt. Dieser Code könnte z. B. als AntiTriggerEvent dienen.

```jsx title="script.lua"
TriggerServerEvent = function(eventName, ...)
    local eventPayload = msgpack.pack({ ... })
    return a(0x7fdd1128, eventName, eventPayload, eventPayload:len())
end;
```

Dieser Code überschreibt zum Beispiel die Funktion TriggerServerEvent und kann zu falschen Bans führen, da er nicht den alten Funktionswert zurückgibt, sondern ihn aufruft.
