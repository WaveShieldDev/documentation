---
sidebar_position: 1
---

# Attempted to trigger an event

Si vous rencontrez ce problème, vous devez surement avoir un système de protection des triggers autre que celui proposé par WaveShield et cela rentre en conflit, par exemple :


```jsx title="script.lua"
TriggerServerEvent = function(eventName, ...)
    local eventPayload = msgpack.pack({ ... })
    return a(0x7fdd1128, eventName, eventPayload, eventPayload:len())
end;
```


Par exemple du code ci dessus, le TriggerServerEvent ne renvoit pas l'ancienne valeur de la fonction ce qui peut provoquer des problèmes
Vérifiez également, en cas de problèmes, que le fxmanisfest.lua de vôtre resource a bien été modifié par WaveShield; ci cela n'est pas le cas, veuillez ajouter en haut de ce fichier la ligne suivante :

```jsx title="fxmanifest.lua"
shared_script '@WaveShield/resource/waveshield.lua' --this line was automatically written by WaveShield
```
