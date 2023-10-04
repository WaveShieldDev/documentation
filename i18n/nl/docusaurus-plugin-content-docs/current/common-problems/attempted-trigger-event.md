---
sidebar_position: 1
---

# Geprobeerd om een trigger te activeren

Als je deze ban tegenkomt, kan dit zijn door een code die de TriggerServerEvent functie overschrijft. Deze code kan mogelijk een eventbeveiligings systeem zijn,
voor een event protectie als voorbeeld.

```jsx title="script.lua"
TriggerServerEvent = function(eventName, ...)
    local eventPayload = msgpack.pack({ ... })
    return a(0x7fdd1128, eventName, eventPayload, eventPayload:len())
end;
```

Bijvoorbeeld, deze code overschijft TriggerServerEvent en kan een false ban veroorzaken omdat hij de oude functie niet terug geeft; enkel wordt hij uitgevoerd.
