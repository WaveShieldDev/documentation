---
sidebar_position: 6
---

# Input Boxes limited to 2 characters

You need to add this code at the top of any client file of the resource that have this issue.

```jsx title="client.lua"
local displayOnscreenKeyboard = DisplayOnscreenKeyboard
function DisplayOnscreenKeyboard(p0, windowTitle, p2, defaultText, defaultConcat1, defaultConcat2, defaultConcat3, maxInputLength)
    return displayOnscreenKeyboard(p0 or false, windowTitle or "FMMC_KEY_TIP8", p2 or "", defaultText or "", defaultConcat1 or "", defaultConcat2 or "", defaultConcat3 or "", maxInputLength or 100)
end
```
