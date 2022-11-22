---
title: Basegun
description: Identifier et classer instantanément une arme sur le terrain
who: Ministère de l’Intérieur
place: ""
themes:
  - Sécurité
promos:
  - Promotion 5
town: 75012 Paris
date: 2021-05-12T15:54:33.256Z
expertises:
  - Data science
  - Développement
image: img/13_basegun_10.svg
ogImage: img/test-og.png
visible: true
---

{{< dailymotion x81fgiw "Vidéo de présentation du défi Basegun">}}

## Le contexte

Aujourd’hui, les forces de l’ordre (gendarmes, policiers et policières) saisissent 6 à 7 000 armes par an. Pour chaque catégorie d’armes identifiées, les agents mettent en place la procédure et envisagent les poursuites légales adaptées.

## La problématique

Cependant, la méthode actuelle d’identification des armes sur le terrain est chronophage, soumise à interprétation et génératrice d’erreurs. En effet, les agents procèdent de trois façons souvent combinées :

- Ils et elles tentent des rapprochements visuels à partir de recherches internet/intranet autonomes
- Ils et elles interrogent leurs collègues ou un armurier privé
- Ils et elles consultent des experts au sein du Ministère de l’Intérieur (SCAE)

La police judiciaire estime que 15 à 20% des armes saisies sont mal ou non identifiées, ce qui conduit à des absences de poursuites ou des poursuites pénales injustifiées.

## Le terrain de jeu

Le défi consiste en la création d'une application terrain qui permettra aux forces de l’ordre d’identifier instantanément une arme à partir de photos. Elle indiquera également la conduite à tenir adaptée. Au-delà de ce cas d’usage identifié, d’autres utilisations connexes d’une telle application (usage de particuliers, armuriers privés, forces de l’ordre européennes) sont à explorer avec l’aide de l’équipe projet.

#### Les défis techniques

La solution doit :

- fournir une réponse instantanée, avec un taux de confiance sur la classification obtenue
- reposer sur une démarche UX, guidée par le Lead UX du laboratoire d’innovation
- reposer sur un modèle d’intelligence artificielle entraîné
- être accessible en mode service (API)

#### L'impact 

L’application libèrera les forces de l’ordre d’une tâche laborieuse et leur permettra de se concentrer sur des actions métier à plus forte valeur ajoutée (enquêtes, poursuites, …), tout en réduisant le risque d’erreur.

Les citoyens seront préservés des poursuites injustifiées liées aux erreurs de classification. Ils seront également mieux informés sur les armes qu’ils détiennent, à travers une mise à disposition du service.

_Les agents publics porteurs de ce projet sont à la recherche d’un ou une data scientist qui dispose d’une expertise en computer vision et d’un développeur ou une développeuse pour la conception d’API, la partie front et l’application mobile. Les profils idéaux seront très entrepreneuriaux, capables de penser d’autres usages_
