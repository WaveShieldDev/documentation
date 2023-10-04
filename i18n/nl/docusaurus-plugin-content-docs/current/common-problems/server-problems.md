---
sidebar_position: 2
---

# Server Problems

Als uw server crasht zonder enige melding van WaveShield, wordt dit niet veroorzaakt door WaveShield zelf. Het is waarschijnlijk een ander script dat voorkomt dat WaveShield een bestand uit het manifest van het script laadt. Dit komt vaak voor bij betaalde scripts die zijn ontworpen om pogingen te blokkeren die als cracking of schending van de servicevoorwaarden kunnen worden beschouwd.

```
"ScriptsToSkipInstallation": ["esx_helloWorld", "an_other_script"]
```

Dan moet je handmatig de volgende lijn van de `fxmanifest.lua` van de script die crasht uw server verwijderen:

```
shared_script '@WaveShield/resource/waveshield.lua'
```

Scripts die aan deze lijst moeten worden toegevoegd zijn de volgende:
We hebben al geprobeerd contact op te nemen met deze services, maar ze hebben ervoor gekozen onze berichten te negeren. We kunnen niet verantwoordelijk worden gehouden voor problemen die kunnen ontstaan als gevolg van het gebruik van deze services.

- dnz Scripts
- Webservices Scripts
- ModFreakz Scripts
- Een script die bij de naam gaat van "<strong>advanced_vehicles</strong>"

:::caution
Door scripts hier toe te voegen, is het mogelijk dat je een aantal false bans krijgt, afhankelijk van of het script bepaalde functies gebruikt die wij detecteren. Voeg alleen scripts toe die anders niet werken!
:::
