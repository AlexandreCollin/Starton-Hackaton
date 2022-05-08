# Starton-Hackaton

## Problème
Notre projet permet de résoudre le problème du manque de reconnaissance des utilisateurs répondants aux questions d'autres utilisateur sur internet.
La reconnaisance apporté est entièrement décentralisée et dépend de la communauté.

## Solution
Nous avons souhaité créer un forum entièrement communautaire dans lequel les utilisateurs répondants aux questions, par le biais de la validation des autres membres, sont rémunérés sous forme de points d'expérience qu'il pourront, par la suite, transformer en NFT non échangeable.
Ces NFTs ont une valeur purement intellectuelle et servent de "certification" dans le domaine traité.
Les certifications pourront, grâce à la réputation de la communauté, apporter une plus-value au CV de l'utilisateur.

Nous avons utilisé NodeJS pour le frontend et pour le backend, Express et MySQL pour le backend ainsi que Svelte pour le frontend.
L'API Starton a été utilisée pour réaliser le mint des NFTs.

Le plus grand défis technique a été d'implementer le système d'obtention de points d'expérience en fonction des upvotes pour mint le NFT automatiquement.
Notre solution a été de nous servir de l'API Starton qui a grandement facilité la création de notre collection, de nos NFTs ainsi que du mint de celles-ci.

## Installation
Pré-requis:
   - NodeJS
   - MySQL

Etapes:
  - Utiliser le `dump.sql` qui se trouve dans le dossier `backend`

*Expliquez, étape par étape, comment quelqu'un peut installer votre projet et l’utiliser Le jury utilisera principalement MacOS, Ubuntu, Android et iOS. Mettre en place un docker / docker-compose est une bonne idée pour permettre à quelqu'un de tester facilement le projet.*

## Équipe et commentaires
Le nom de notre équipe est Frame et est composé de trois membres qui sont Alexandre Collin--Bétheuil, Antoine Beaudoux et Alexandre Chauvin.
Ce hackathon nous a permis dans un premier temps d'approfondir nos connaissances sur la blockchain et son fonctionnement grâce à de multiples intervenants plus passionnants les uns que les autres.
Nous avons également pu solidifier nos compétences en réalisant un backend et frontend.
L'API de Starton nous a instruit la création de NFTs et leur gestion. 
