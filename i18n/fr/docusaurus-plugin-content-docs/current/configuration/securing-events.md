---
sidebar_position: 2
---

# Securing events

:::tip
Everything under here is outdated, but still can work for you. We're suggesting to use the "<strong>AI Anti Trigger Server Events [BETA]</strong> in the panel.

![image](img/aitrigger.png)
:::

---

You will have to replace your event handler function & also the trigger function.

```jsx title="client.lua"
// Replace this:
TriggerServerEvent("my_awesome_event",999,"test")

// With this:
exports["WaveShield"]:TriggerServerEvent("my_awesome_event",999,"test")
```

```jsx title="server.lua"
// Replace this:
AddEventHandler("my_awesome_event", function(number, string)
    print(number, string)
end)

// With this:
exports["WaveShield"]:AddEventHandler("my_awesome_event", function(source, number, string)
    print(number, string)
end)
```

You can also secure your client events:

```jsx title="client.lua"
// Replace this
AddEventHandler("esx_ambulancejob:revive", function(...)
end)

// With this
exports["WaveShield"]:AddEventHandler("esx_ambulancejob:revive", function(...)
end)
```

:::info
When you secure an event you also need to remove his register function. (RegisterServerEvent or RegisterNetEvent)

We recommand only to secure those that are exploitable (giving advantage, money, weapon, vehicles etc)
:::
