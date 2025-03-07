# Black Screen, 'awaiting scripts' or errors

If you experience a black screen, an infinite "Awaiting Scripts" message, or errors after installing WaveShield, **you did not start WaveShield at the top of your `server.cfg` file**.

WaveShield **must** be the first resource loaded to function properly.

Ensure your `server.cfg` includes the following in the correct order:

```cfg title="server.cfg"
ensure WaveShield

ensure sessionmanager
ensure monitor
ensure chat
ensure [scripts]
```

:::warning Do Not Use Folders
You must start the anti-cheat using `ensure WaveShield`.
Do not use `ensure [folder]`, as this will not properly load the resource.
:::
