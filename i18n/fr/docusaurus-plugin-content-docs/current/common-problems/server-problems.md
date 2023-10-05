---
sidebar_position: 2
---

# Problèmes serveur

Si votre serveur crash sans la moindre notification de WaveShield, cela n'est pas a cause de WaveShield. Il s'agit probablement d'un autre script qui empêche WaveShield de charger un fichier à partir du fxmanifest du script.
Ceci est généralement observé dans les scripts payants conçus pour bloquer les tentatives qui pourraient être considérées comme du piratage ou des violations des conditions de service.

```
"ScriptsToSkipInstallation": ["esx_helloWorld", "an_other_script"]
```

Ensuite, vous devez aller manuellement dans le `fxmanifest.lua`` du script qui fait crash votre serveur et supprimer la ligne suivante

```
shared_script '@WaveShield/resource/waveshield.lua'
```


Les scripts incompatibles avec WaveShield sont les suivants :
Veuillez noter que nous avons déjà tenté de contacter ces services, mais ils ont choisi d'ignorer nos messages. Nous ne pouvons être tenus responsables des problèmes pouvant survenir suite à leur utilisation.

- dnz Scripts
- Webservices Scripts
- ModFreakz Scripts
- Un script portant le nom "<strong>advanced_vehicles</strong>"

:::caution
En enlevant WaveShield des scripts incompatible avec la méthode ci-dessus, il se peut que vous rencontriez des problèmes de fake bans; ajoutez uniquement les scripts qui ne peuvent pas fonctionner avec WaveShield !
:::
