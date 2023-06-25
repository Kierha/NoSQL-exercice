# Projet NoSQL exercice

Ce projet a pour objectif de sélectionner une base de données NoSQL, de l'installer et de créer des fonctions CRUD pour l'utiliser et exploiter la base de données. Il est accompagné d'un fichier de données au format CSV à insérer dans la base de données qui contient des écoles ainsi que leurs informations.

## Dépendances requises

- Node.js (version minimale recommandée : 12.0.0 ou supérieure) : langage de développement. [Téléchargement de Node.js](https://nodejs.org)
- LevelDB : base de données NoSQL. [Documentation officielle de LevelDB](https://github.com/Level/level)

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
