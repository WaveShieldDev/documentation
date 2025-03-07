---
sidebar_position: 3
---

# Server crashing / Script not starting

:::info
If your server is crashing without a message from WaveShield, then its not from WaveShield.
:::

If you are experiencing this issue, its surely an obfuscated script that don't want WaveShield to be installed into it. Often paid scripts that thinks it could be a "crack attempt".

Identify that resource and add it to the ignored scripts in the configuration of WaveShield (cf image)

![Scripts](img/scripts.jpg)

Then you need to manually go in the fxmanifest.lua of this script that is crashing your server and remove this line. Make sure to save the config, restart your server and you are good to go!

```lua title="fxmanifest.lua"
shared_script '@WaveShield/resource/waveshield.lua'
```

:::danger
For information, please only ignore scripts that are not starting when WaveShield is installed into it.
:::