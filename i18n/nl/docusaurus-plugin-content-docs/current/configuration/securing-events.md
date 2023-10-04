---
sidebar_position: 2
---

# Beveiligen van events

:::tip
Alles hieronder is niet meer up-to date, maar het kan nog steeds werken voor jou. We raden je aan om de "<strong>AI Anti Trigger Server Events [BETA]</strong> in de panel te gebruiken.<br/>
![image](img/aitrigger.png)
:::

---

Je zal ook je event handler functie & de trigger functie vervangen.

```jsx title="client.lua"
// Vervang dit:
TriggerServerEvent("my_awesome_event",999,"test")

// Met dit:
exports["WaveShield"]:TriggerServerEvent("my_awesome_event",999,"test")
```

```jsx title="server.lua"
// Vervang dit:
AddEventHandler("my_awesome_event", function(number, string)
    print(number, string)
end)

// Met dit:
exports["WaveShield"]:AddEventHandler("my_awesome_event", function(source, number, string)
    print(number, string)
end)
```

Je kan ook de client events beveiligen:

```jsx title="client.lua"
// Vervang dit:
AddEventHandler("esx_ambulancejob:revive", function(...)
end)

// Met dit:
exports["WaveShield"]:AddEventHandler("esx_ambulancejob:revive", function(...)
end)
```

:::info
Wanneer je een event beveiligd dan zal je ook de register functie moeten verwijderen (RegisterServerEvent of RegisterNetEvent).

We raden aan alleen de events te beveiligen die exploitabel zijn. (geld, wapens, voertuigen, en andere dingen.)
:::
