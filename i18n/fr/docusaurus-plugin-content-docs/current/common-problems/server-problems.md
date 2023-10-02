---
sidebar_position: 2
---

# Server Problems

If your server crashes without any notification from WaveShield, it is not caused by WaveShield itself. It is likely another script that is preventing WaveShield from loading a file from the script's manifest. This is commonly seen in paid scripts that are designed to block attempts that might be considered cracking or violations of the terms of service.

```
"ScriptsToSkipInstallation": ["esx_helloWorld", "an_other_script"]
```

Then you need to manually go in the `fxmanifest.lua`` of the script that is crashing your server and remove the following line

```
shared_script '@WaveShield/resource/waveshield.lua'
```

Scripts that should be added to this list are as follows:
Please note that we have already attempted to contact these services, but they have chosen to disregard our messages. We cannot be held responsible for any issues that may arise as a result of using them..

- dnz Scripts
- Webservices Scripts
- ModFreakz Scripts
- A script that goes by the name of "<strong>advanced_vehicles</strong>"

:::caution
By adding scripts here, it may be possible that you have some false bans depending if the script use some features that we detect. Only add scripts that won't work otherwise!
:::