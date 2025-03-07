---
sidbar_position: 2
---

# 🎫 Bypass Staffs

We'll use ACE permissions so that your staff can execute in-game commands or be bypassed on the anticheat. You can use any identifier supported by FiveM (license, Discord, Steam, etc.). You can also use groups (see [FiveM Docs](https://docs.fivem.net/docs/server-manual/server-commands/#add_ace-principal-object-allowdeny)).

:::warning 
However, we'd like to point out that you don't necessarily need to add the bypass to your staff, as the anticheat normally differentiates between actions performed by staff and those by cheaters.
:::

## Configuration
Head to your `server.cfg` file. Here are a few examples of how you can add permissions for your staff:

### `server.cfg`
```cfg
add_ace identifier.license:xxx "WaveShield.Commands" allow
add_ace identifier.steam:xxx "WaveShield.Bypass" allow
add_ace group.mod "WaveShield.Bypass" allow
```

## Permission Names

| Permission Name       | Description |
|----------------------|-------------|
| `WaveShield.Bypass`  | Bypasses the entire anticheat system. The person can't be banned. |
| `WaveShield.Commands` | The person will be able to execute the different commands in the chat (or F8 console). |
