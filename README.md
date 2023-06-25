# Projet NoSQL exercice

Ce projet a pour objectif de sélectionner une base de données NoSQL, de l'installer et de créer des fonctions CRUD pour l'utiliser et exploiter la base de données. Il est accompagné d'un fichier de données au format CSV à insérer dans la base de données qui contient des écoles ainsi que leurs informations.

## Dépendances requises

- Node.js (version minimale recommandée : 12.0.0 ou supérieure) : langage de développement. [Téléchargement de Node.js](https://nodejs.org)
- LevelDB : base de données NoSQL. [Documentation officielle de LevelDB](https://github.com/Level/level)

## A propos de LevelDB

LevelDB est une base de données NoSQL open source, développée par Google. Elle est conçue pour être rapide, légère et efficace, offrant une solution de stockage de clé-valeur performante. LevelDB est implémentée en C++ et fournit une API simple pour interagir avec la base de données.
LevelDB a été conçue pour fournir des performances élevées et une grande flexibilité, la rendant adaptée à de nombreux cas d'utilisation. Elle est utilisée par de nombreuses applications, telles que Google Chrome, Google BigTable, Google Play, etc.

Principales caractéristiques de LevelDB :

- Stockage de clé-valeur : LevelDB stocke les données sous forme de paires clé-valeur, permettant une récupération rapide des valeurs en fonction des clés.
- Performances élevées : LevelDB est conçue pour fournir des performances optimales, en exploitant des techniques d'indexation et de mise en cache efficaces.
- Compression des données : LevelDB prend en charge la compression des données, permettant d'économiser de l'espace de stockage tout en maintenant de bonnes performances.
- Tolérance aux pannes : LevelDB intègre des mécanismes de récupération automatique en cas de pannes ou d'arrêts inattendus, garantissant l'intégrité des données.
- LevelDB est une solution polyvalente et peut être utilisée dans différents scénarios, tels que le stockage de données, les caches, les journaux d'événements, etc.

## Installation

1. Installer Node.js en téléchargeant la version TLS depuis le site officiel.
2. Vérifier que Node.js est correctement installé en exécutant la commande `node --version`.
3. Installer la base de données LevelDB en exécutant la commande `npm install level`.

## Structure du projet

- `data`
  - `contacts.csv` : Fichier de données à insérer dans la base de données.
- `src`
  - `index.js` : Fichier de lancement des fonctions.
  - `csvParser.js` : Fonction pour le parsing du fichier CSV.
  - `db.js` : Contient les différentes fonctions d'interaction avec la base de données.
- `tests`
  - `db.test.js` : Fichier contenant les tests unitaires.
- `package.json` : Fichier de configuration du projet contenant les informations et les dépendances.

## Utilisation

1. Exécuter la commande `npm install` pour installer les dépendances.
2. Se rendre dans le dossier `src` : `cd src`.
3. Exécuter la commande `node index.js` pour lancer le projet.
4. Décommenter les fonctions d'appel aux méthodes du fichier `db.js` dans `src/index.js` selon les fonctionnalités à tester.
5. Il est possible d'exécuter le fichier de test en exécutant la commande : `npm test`. Cela est possible grâce à la déclaration du script dans le fichier `package.json`.

## Fonctionnalités principales

- [IMPORTANT] Les écoles sont enregistrées dans la base de données avec une clé correspondant au champ `ecole.titre`. La clé est utilisée pour interagir avec une école spécifique.
- Ouverture et fermeture de la base de données.
- Insertion d'écoles dans la base de données.
- Récupération des informations d'une école à partir de sa clé.
- Mise à jour des informations d'une école.
- Suppression d'une école à partir de sa clé.

## Tests unitaires

Les tests unitaires vérifient les fonctionnalités suivantes :

- Ouverture et fermeture de la base de données.
- Insertion d'écoles dans la base de données : vérifie l'existence de l'école insérée dans la base de données.
- Insertion des écoles du fichier CSV dans la base de données : vérifie que le nombre d'écoles insérées en base de données correspond au nombre d'écoles dans le fichier CSV.
- Récupération des informations d'une école à partir de sa clé : vérifie que les informations de l'école récupérée correspondent aux informations de l'école souhaitée.
- Mise à jour des informations d'une école : vérifie que les informations de l'école mise à jour correspondent aux informations de l'école souhaitée.
- Suppression d'une école à partir de sa clé : vérifie que l'école supprimée n'existe plus dans la base de données.

## Informations supplémentaires

Dans un projet plus complexe, il serait préférable d'enregistrer les écoles avec un identifiant unique (ID). Cela aurait nécessité l'utilisation d'une dépendance supplémentaire, telle que `uuidv4`, qui peut être installée avec la commande `npm install uuid`. L'ID unique pourrait alors être attribué à chaque école lors de son insertion dans la base de données.
